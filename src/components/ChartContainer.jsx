import React, { useState, useEffect } from "react";
import { 
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid, ReferenceLine, Label,
    LineChart, Line,
    AreaChart, Area
} from "recharts";
import "../css/Charts.css";
import TeamFilter from './TeamFilter'; // Import TeamFilter

const marginTop = 20, marginBottom = 20, marginLeft = 20, marginRight = 20;
const colorMap = ["#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#ff4569", "#56b8d6", "#f0a6ca","#8884d8", "#82ca9d", "#ffc658", "#ff7f50", "#ff4569", "#56b8d6", "#f0a6ca"];

const ChartContainer = ({ title, chartType, data }) => {
    const [selectedTeam, setSelectedTeam] = useState("UTA");

    const handleTeamChange = (newTeamId) => {
        setSelectedTeam(newTeamId);
    };

    useEffect(() => {}, [selectedTeam]);

    if (!data || data.length === 0) return <p>No data available</p>;

    if (chartType === "stackedBar") {
        // Transform data for stacked bar chart
        const groupedData = data.reduce((acc, curr) => {
            let existing = acc.find((item) => item.f_name === curr.f_name);
            if (!existing) {
                existing = { f_name: curr.f_name };
                acc.push(existing);
            }
            existing[curr.name] = curr.pts;
            return acc;
        }, []);
    
        // Sort by total points
        groupedData.forEach(item => {
            item.grouped_total = Object.values(item).reduce((sum, value) => (typeof value === "number" ? sum + value : sum), 0);
        });
        const sortedGroupedData = groupedData.sort((a, b) => b.grouped_total - a.grouped_total);
    
        // Utility function for bar colors
        const getColorByRank = (rank) => {
            return colorMap[rank - 1] || "#8884d8"; // Default color
        };
    
        return (
            <div className="chart-wrapper">
                <h3 className="chart-title">{title}</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={sortedGroupedData} margin={{top: marginTop, right: marginRight, left: marginLeft, bottom: marginBottom}}>
                        <XAxis dataKey="f_name" >
                            <Label value="Name" offset={-20} position="insideBottom" />
                        </XAxis>
                        <YAxis 
                        domain={[0, Math.max(...sortedGroupedData.map(d => d.group_total))]} 
                            tickFormatter={(tick) => {
                                // Format numbers like 600000 to 600k
                                if (tick >= 1000000) {
                                    return `${(tick / 1000000).toFixed(1)}M`; // 6000000 becomes 6.0M
                                } else if (tick >= 1000) {
                                    return `${(tick / 1000).toFixed(1)}k`; // 6000 becomes 6.0k
                                }
                                return tick;
                            }}>
                            <Label value="Career Points" offset={70} position="insideTopRight" angle={-90}/>
                        </YAxis>
                        <Tooltip />
                        {data.map((entry) => (
                            <Bar key={entry.name} dataKey={entry.name} stackId="a" fill={getColorByRank(entry.rank)} />
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    if (chartType === "simpleLine") {
        return (
            <div className="chart-wrapper">
                <h3 className="chart-title">{title}</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{top: marginTop, right: marginRight, left: marginLeft, bottom: marginBottom}}>
                        <XAxis dataKey="year" >
                            <Label value="Year" offset={-40} position="insideBottom" />
                        </XAxis>
                        <YAxis 
                            tickFormatter={(tick) => {
                                // Format numbers like 600000 to 600k
                                if (tick >= 1000000) {
                                    return `${(tick / 1000000).toFixed(1)}M`; // 6000000 becomes 6.0M
                                } else if (tick >= 1000) {
                                    return `${(tick / 1000).toFixed(1)}k`; // 6000 becomes 6.0k
                                }
                                return tick;
                            }}>
                            <Label value="Total Points" offset={80} position="insideTopRight" angle={-90}/>
                        </YAxis>
                        <Tooltip labelFormatter={(label) => label} />
                        <Legend />
                        
                        {['ohio', 'michigan', 'pennsylvania'].map((state, index) => (
                            <Line 
                                key={state}
                                dataKey={state}  // Use the state name as the dataKey
                                name={state.charAt(0).toUpperCase() + state.slice(1)} // Capitalize the first letter for the legend
                                stroke={colorMap[index % colorMap.length]} // Use the color from the colorMap
                                strokeWidth={3}
                                dot={false}  // Remove dots from the line initially
                                activeDot={{ r: 6 }} // Show dot when hovering over a data point
                            />
                        ))}
                    </LineChart>
                </ResponsiveContainer>
            </div>
        );
    }

    if (chartType === "AreaChartFillByValue") {
        // Filter data based on selected team
        const filteredData = selectedTeam ? data.filter(item => item.team_id === selectedTeam) : data;

        const dataMax = Math.max(...filteredData.map((i) => i.winning_percentage));
        const dataMin = Math.min(...filteredData.map((i) => i.winning_percentage));
        const gradientOffset = () => {
            if (dataMax <= .5) {
                return 0;
            }
            if (dataMin >= .5) {
                return 1;
            }
            return 1 - ((0.5 - dataMin) / (dataMax - dataMin));
        };

        const off = gradientOffset();
        const roundedDataMax = Math.ceil(dataMax * 10) / 10;
        const roundedDataMin = Math.floor(dataMin * 10) / 10;
        const ticks = [];
        for (let i = roundedDataMin; i <= roundedDataMax; i += 0.1) {
            ticks.push(Math.round(i * 10) / 10);
        }

        return (
            <div className="chart-wrapper">
                <TeamFilter selectedTeam={selectedTeam} handleChange={(e) => handleTeamChange(e.target.value)} />
                <h3 className="chart-title">{title}</h3>
                <ResponsiveContainer width="100%"height={300}>
                    <AreaChart data={filteredData} margin={{top: marginTop, right: marginRight, left: marginLeft, bottom: marginBottom}}>
                        <XAxis dataKey="phase" interval={0} angle={-45} textAnchor="end">
                            <Label value="Phase of the Moon" offset={-20} position="insideBottom" />
                        </XAxis>
                        <YAxis domain={[roundedDataMin, roundedDataMax]} ticks={ticks}
                            label={{ value: 'Winning Percentage', offset: 50, angle: -90, position: 'insideTopRight' }}>
                        </YAxis>
                        <Tooltip formatter={(value, name) => {
                            if (name === 'winning_percentage') {
                                return [`${(value * 100).toFixed(2)}%`, 'Win%'];
                            }
                            return [value, name];
                        }}
                            itemStyle={{ color: '#000' }} />
                        <defs>
                            <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                <stop offset={off} stopColor="green" stopOpacity={1} />
                                <stop offset={off} stopColor="red" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        {ticks.map(tick => (
                            <ReferenceLine key={tick} y={tick} stroke="#ccc" strokeDasharray="3 3" />
                        ))}
                        <Area type="monotone" dataKey="winning_percentage" stroke="#ffffff" fill="url(#splitColor)" baseValue={0.5} />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        );
    }

    if (chartType === "simpleBar") {
        const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length > 0) {
              return (
                <div className="custom-tooltip" style={{ background: "#fff", padding: "5px", border: "1px solid #ccc" }}>
                  <p style={{ color: "black", fontWeight: "bold" }}>{`${payload[0].value} games`}</p>
                </div>
              );
            }
            return null;
          };
        return (
            <div className="chart-wrapper">
                <h3 className="chart-title">{title}</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: marginTop, right: marginRight, left: marginLeft, bottom: marginBottom }}>
                    <XAxis dataKey="name" axisLine={true} tick={false} >
                    <Label value="Name" offset={-10} position="insideBottom" />
                        </XAxis>
                        <YAxis>
                            <Label value="Total Games" offset={70} angle={-90} position="insideTopRight" />
                        </YAxis>
                        <Tooltip content={<CustomTooltip />} />
                        <Bar 
                            dataKey="group_total" 
                            fill="#8884d8"
                            shape={(props) => {
                                const { x, y, width, height, index, payload } = props;
                                return (
                                    <g>
                                        {/* Bar Shape */}
                                        <rect 
                                            x={x} 
                                            y={y} 
                                            width={width} 
                                            height={height} 
                                            fill={colorMap[index % colorMap.length]} 
                                        />
                                        {/* Text inside bar */}
                                        <text 
                                            x={x + width / 2} 
                                            y={y + height / 2} 
                                            textAnchor="middle" 
                                            dominantBaseline="middle"
                                            fill="black" 
                                            fontSize={12}
                                            angle={-90}
                                            fontWeight="bold"
                                            transform={`rotate(-90, ${x + width / 2}, ${y + height / 2})`} 
                                        >
                                            {payload.name} {/* This is the X-axis label inside the bar */}
                                        </text>
                                    </g>
                                );
                            }}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }

    return null; // If chartType doesn't match, return nothing
};

export default ChartContainer;