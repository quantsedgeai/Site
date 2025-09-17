"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
  ComposedChart,
  ReferenceLine,
} from "recharts";

interface DataPoint {
  time: string;
  price: number;
  volume: number;
  return: number;
  sharpe: number;
}

// Generate realistic trading data
const generateTradingData = (): DataPoint[] => {
  const data: DataPoint[] = [];
  let price = 1000;
  let cumulativeReturn = 0;
  
  for (let i = 0; i < 90; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (90 - i));
    
    // Simulate realistic price movement with trend and volatility
    const trend = 0.001; // Slight upward trend
    const volatility = 0.02;
    const randomChange = (Math.random() - 0.5) * volatility;
    const priceChange = trend + randomChange;
    
    price *= (1 + priceChange);
    const dailyReturn = priceChange * 100;
    cumulativeReturn += dailyReturn;
    
    data.push({
      time: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      price: Math.round(price * 100) / 100,
      volume: Math.random() * 1000000 + 500000,
      return: Math.round(cumulativeReturn * 100) / 100,
      sharpe: Math.min(3.5, Math.max(1.5, 2.3 + (Math.random() - 0.5) * 0.4)),
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-xl p-4 border border-accent/20"
      >
        <p className="label text-accent mb-2">{label}</p>
        <div className="space-y-1">
          <p className="text-sm">
            <span className="text-text-secondary">Return: </span>
            <span className={payload[0].value >= 0 ? "text-green-400" : "text-red-400"}>
              {payload[0].value >= 0 ? "+" : ""}{payload[0].value.toFixed(2)}%
            </span>
          </p>
          <p className="text-sm">
            <span className="text-text-secondary">Sharpe: </span>
            <span className="text-text-primary">{payload[1]?.value?.toFixed(2)}</span>
          </p>
        </div>
      </motion.div>
    );
  }
  return null;
};

export function TradingChart() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [isLive, setIsLive] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    const initialData = generateTradingData();
    setData(initialData);
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const interval = setInterval(() => {
      setData(currentData => {
        const newData = [...currentData];
        const lastPoint = newData[newData.length - 1];
        
        // Update the last data point to simulate live updates
        const volatility = 0.005;
        const change = (Math.random() - 0.5) * volatility;
        const newReturn = lastPoint.return + change * 100;
        
        newData[newData.length - 1] = {
          ...lastPoint,
          return: Math.round(newReturn * 100) / 100,
          sharpe: Math.min(3.5, Math.max(1.5, lastPoint.sharpe + (Math.random() - 0.5) * 0.1)),
        };
        
        setIsLive(true);
        setTimeout(() => setIsLive(false), 1000);
        
        return newData;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [isInView]);
  
  const currentReturn = data.length > 0 ? data[data.length - 1].return : 0;
  const currentSharpe = data.length > 0 ? data[data.length - 1].sharpe : 0;
  
  return (
    <div ref={ref} className="glass rounded-2xl p-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Live Performance</h3>
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-text-tertiary">Total Return</p>
              <p className={`text-2xl font-bold ${currentReturn >= 0 ? "text-green-400" : "text-red-400"}`}>
                {currentReturn >= 0 ? "+" : ""}{currentReturn.toFixed(2)}%
              </p>
            </div>
            <div>
              <p className="text-sm text-text-tertiary">Sharpe Ratio</p>
              <p className="text-2xl font-bold text-accent">
                {currentSharpe.toFixed(2)}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.span 
            className={`relative flex h-3 w-3 ${isLive ? "animate-pulse" : ""}`}
            animate={{ scale: isLive ? [1, 1.2, 1] : 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
          </motion.span>
          <span className="text-sm text-text-secondary font-mono">LIVE</span>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-80"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="returnGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00FFC6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#00FFC6" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="#333" 
              horizontal={true}
              vertical={false}
            />
            
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              interval="preserveStartEnd"
            />
            
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#666", fontSize: 12 }}
              domain={["dataMin - 5", "dataMax + 5"]}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <ReferenceLine y={0} stroke="#666" strokeDasharray="2 2" />
            
            <Area
              type="monotone"
              dataKey="return"
              stroke="#00FFC6"
              strokeWidth={3}
              fill="url(#returnGradient)"
              dot={false}
              activeDot={{
                r: 6,
                fill: "#00FFC6",
                stroke: "#000",
                strokeWidth: 2,
              }}
            />
            
            <Line
              type="monotone"
              dataKey="sharpe"
              stroke="#FF6B6B"
              strokeWidth={2}
              dot={false}
              yAxisId="right"
              strokeDasharray="5 5"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>
      
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-sm text-text-tertiary mb-1">24h Return</p>
          <p className="text-lg font-bold text-green-400">+2.34%</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm text-text-tertiary mb-1">Max Drawdown</p>
          <p className="text-lg font-bold text-red-400">-4.2%</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-text-tertiary mb-1">Win Rate</p>
          <p className="text-lg font-bold">72.3%</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <p className="text-sm text-text-tertiary mb-1">Volatility</p>
          <p className="text-lg font-bold text-accent">12.8%</p>
        </motion.div>
      </div>
    </div>
  );
}