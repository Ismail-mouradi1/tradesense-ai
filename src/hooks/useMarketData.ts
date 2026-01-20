import { useState, useEffect, useCallback } from 'react';

export interface MarketTicker {
  symbol: string;
  name?: string;
  price: number;
  change: number;
  changePercent: number;
  currency: string;
  market?: string;
  marketState?: string;
  timestamp: string;
}

interface UseMarketDataOptions {
  symbols?: string[];
  market?: 'international' | 'morocco' | 'all';
  refreshInterval?: number;
}

export function useMarketData(options: UseMarketDataOptions = {}) {
  const { 
    symbols, 
    market = 'all', 
    refreshInterval = 30000 
  } = options;
  
  const [data, setData] = useState<Record<string, MarketTicker>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<Date | null>(null);
  
  // Create a stable string key for dependencies
  const cacheKey = `ts_market_data_${market}_${(symbols || []).join(',')}`;

  const fetchData = useCallback(async () => {
    try {
      console.log('Fetching market data...');
      
      // ✅ FIX 1: Use Environment Variable
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      
      // ✅ FIX 2: Correct fetch syntax
      const response = await fetch(`${API_URL}/api/market-data`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symbols, market }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success && result.data) {
        setData(result.data);
        setLastUpdate(new Date());
        setError(null);
        try {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ data: result.data, ts: Date.now() })
          );
        } catch { void 0; }
      } else {
        throw new Error(result.error || 'Failed to fetch market data');
      }
    } catch (err) {
      console.error('Market data error:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  }, [cacheKey, market]); // ✅ FIX 3: Depend on stable cacheKey, NOT 'symbols' array

  useEffect(() => {
    // Load cached data first
    try {
      const raw = localStorage.getItem(cacheKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed?.data && Object.keys(parsed.data).length > 0) {
          setData(parsed.data);
          setLastUpdate(new Date(parsed.ts));
          setIsLoading(false);
        }
      }
    } catch { void 0; }

    fetchData();
    
    const interval = setInterval(fetchData, refreshInterval);
    return () => clearInterval(interval);
  }, [fetchData, refreshInterval]);

  const tickers = Object.values(data);

  return {
    tickers,
    data,
    isLoading,
    error,
    lastUpdate,
    refresh: fetchData
  };
}
