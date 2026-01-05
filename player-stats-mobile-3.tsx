import React, { useState, useMemo } from 'react';
import { BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Award, Target, Users, Shield } from 'lucide-react';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('allplayers');
  const [yearFilter, setYearFilter] = useState('2025');
  const [leaderboardMetric, setLeaderboardMetric] = useState('totals');
  const [comparisonMode, setComparisonMode] = useState('percentage');

  const data2025 = [
    { name: "SANWAR", points: 219, assists: 32, cleanSheets: 117, goals: 31, gameweeks: 38, games: 152, avg: 5.76 },
    { name: "ABDUL HYE", points: 196, assists: 26, cleanSheets: 108, goals: 26, gameweeks: 37, games: 148, avg: 5.30 },
    { name: "REZWAN", points: 192, assists: 49, cleanSheets: 18, goals: 82, gameweeks: 40, games: 160, avg: 4.80 },
    { name: "IKRAM", points: 171, assists: 22, cleanSheets: 88, goals: 25, gameweeks: 37, games: 148, avg: 4.62 },
    { name: "ZAFFER", points: 169, assists: 28, cleanSheets: 62, goals: 39, gameweeks: 40, games: 160, avg: 4.23 },
    { name: "NABEEL", points: 150, assists: 15, cleanSheets: 88, goals: 13, gameweeks: 34, games: 136, avg: 4.41 },
    { name: "NOOR", points: 147, assists: 35, cleanSheets: 26, goals: 59, gameweeks: 28, games: 112, avg: 5.25 },
    { name: "RUMEL", points: 145, assists: 24, cleanSheets: 72, goals: 14, gameweeks: 35, games: 140, avg: 4.14 },
    { name: "A.ALIM", points: 137, assists: 34, cleanSheets: 10, goals: 62, gameweeks: 31, games: 124, avg: 4.42 },
    { name: "MOSH", points: 137, assists: 15, cleanSheets: 61, goals: 34, gameweeks: 27, games: 108, avg: 5.07 },
    { name: "SHOMEEM", points: 134, assists: 13, cleanSheets: 72, goals: 16, gameweeks: 37, games: 148, avg: 3.62 },
    { name: "JANGIR", points: 131, assists: 18, cleanSheets: 0, goals: 78, gameweeks: 35, games: 140, avg: 3.74 },
    { name: "SHUHEL", points: 126, assists: 14, cleanSheets: 58, goals: 15, gameweeks: 39, games: 156, avg: 3.23 },
    { name: "MUJIB", points: 125, assists: 13, cleanSheets: 54, goals: 28, gameweeks: 30, games: 120, avg: 4.17 },
    { name: "BAHAR", points: 100, assists: 19, cleanSheets: 14, goals: 41, gameweeks: 27, games: 108, avg: 3.70 },
    { name: "KAMAL", points: 63, assists: 4, cleanSheets: 30, goals: 6, gameweeks: 24, games: 96, avg: 2.63 }
  ];

  const data2024 = [
    { name: "NOOR", points: 255, assists: 43, cleanSheets: 36, goals: 131, gameweeks: 43, games: 172, avg: 5.93 },
    { name: "SANWAR", points: 241, assists: 40, cleanSheets: 142, goals: 19, gameweeks: 40, games: 160, avg: 6.03 },
    { name: "REZWAN", points: 188, assists: 37, cleanSheets: 28, goals: 82, gameweeks: 42, games: 168, avg: 4.48 },
    { name: "ABDUL HYE", points: 180, assists: 32, cleanSheets: 70, goals: 47, gameweeks: 35, games: 140, avg: 5.14 },
    { name: "IKRAM", points: 178, assists: 44, cleanSheets: 68, goals: 30, gameweeks: 37, games: 148, avg: 4.81 },
    { name: "A.ALIM", points: 173, assists: 42, cleanSheets: 12, goals: 80, gameweeks: 39, games: 156, avg: 4.44 },
    { name: "JANGIR", points: 152, assists: 33, cleanSheets: 4, goals: 72, gameweeks: 43, games: 172, avg: 3.53 },
    { name: "SHABBIR", points: 138, assists: 14, cleanSheets: 68, goals: 15, gameweeks: 42, games: 168, avg: 3.29 },
    { name: "MOSH", points: 136, assists: 23, cleanSheets: 66, goals: 17, gameweeks: 32, games: 128, avg: 4.25 },
    { name: "ZAFFER", points: 133, assists: 20, cleanSheets: 28, goals: 54, gameweeks: 31, games: 124, avg: 4.29 },
    { name: "SHUHEL", points: 133, assists: 14, cleanSheets: 64, goals: 18, gameweeks: 38, games: 152, avg: 3.50 },
    { name: "BAHAR", points: 132, assists: 17, cleanSheets: 64, goals: 25, gameweeks: 26, games: 104, avg: 5.08 },
    { name: "NABEEL", points: 128, assists: 13, cleanSheets: 70, goals: 9, gameweeks: 36, games: 144, avg: 3.56 },
    { name: "KAMAL", points: 127, assists: 19, cleanSheets: 50, goals: 25, gameweeks: 33, games: 132, avg: 3.85 },
    { name: "SHOMEEM", points: 127, assists: 11, cleanSheets: 59, goals: 22, gameweeks: 35, games: 140, avg: 3.63 },
    { name: "RUMEL", points: 89, assists: 23, cleanSheets: 24, goals: 16, gameweeks: 26, games: 104, avg: 3.42 },
    { name: "MUJIB", points: 74, assists: 12, cleanSheets: 20, goals: 24, gameweeks: 19, games: 76, avg: 3.89 },
    { name: "SHAHADAT", points: 67, assists: 6, cleanSheets: 6, goals: 40, gameweeks: 15, games: 60, avg: 4.47 },
    { name: "ASHAB", points: 61, assists: 9, cleanSheets: 30, goals: 9, gameweeks: 13, games: 52, avg: 4.69 }
  ];

  const comparisonData = useMemo(() => {
    const players2024Map = new Map(data2024.map(p => [p.name, p]));
    const players2025Map = new Map(data2025.map(p => [p.name, p]));
    const allPlayers = new Set([...data2024.map(p => p.name), ...data2025.map(p => p.name)]);
    
    return Array.from(allPlayers).map(name => {
      const p2024 = players2024Map.get(name);
      const p2025 = players2025Map.get(name);
      const pointsChange = ((p2025?.points || 0) - (p2024?.points || 0)) / (p2024?.points || 1) * 100;
      const goalsChange = ((p2025?.goals || 0) - (p2024?.goals || 0)) / (p2024?.goals || 1) * 100;
      const assistsChange = ((p2025?.assists || 0) - (p2024?.assists || 0)) / (p2024?.assists || 1) * 100;
      const cleanSheetsChange = ((p2025?.cleanSheets || 0) - (p2024?.cleanSheets || 0)) / (p2024?.cleanSheets || 1) * 100;
      
      return {
        name,
        points2024: p2024?.points || 0,
        points2025: p2025?.points || 0,
        goals2024: p2024?.goals || 0,
        goals2025: p2025?.goals || 0,
        assists2024: p2024?.assists || 0,
        assists2025: p2025?.assists || 0,
        cleanSheets2024: p2024?.cleanSheets || 0,
        cleanSheets2025: p2025?.cleanSheets || 0,
        avg2024: p2024?.avg || 0,
        avg2025: p2025?.avg || 0,
        pointsChange: isFinite(pointsChange) ? pointsChange : 0,
        goalsChange: isFinite(goalsChange) ? goalsChange : 0,
        assistsChange: isFinite(assistsChange) ? assistsChange : 0,
        cleanSheetsChange: isFinite(cleanSheetsChange) ? cleanSheetsChange : 0,
        pointsAbsolute: (p2025?.points || 0) - (p2024?.points || 0),
        goalsAbsolute: (p2025?.goals || 0) - (p2024?.goals || 0),
        assistsAbsolute: (p2025?.assists || 0) - (p2024?.assists || 0),
        cleanSheetsAbsolute: (p2025?.cleanSheets || 0) - (p2024?.cleanSheets || 0),
        avgChange: (p2025?.avg || 0) - (p2024?.avg || 0)
      };
    }).sort((a, b) => b.points2025 - a.points2025);
  }, []);

  const allPlayersData = useMemo(() => {
    const players2024Map = new Map(data2024.map(p => [p.name, p]));
    const players2025Map = new Map(data2025.map(p => [p.name, p]));
    const allPlayers = new Set([...data2024.map(p => p.name), ...data2025.map(p => p.name)]);
    
    return Array.from(allPlayers).map(name => ({
      name,
      data2024: players2024Map.get(name) || null,
      data2025: players2025Map.get(name) || null
    })).sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const topPerformers = useMemo(() => {
    const data = yearFilter === '2024' ? data2024 : data2025;
    
    if (leaderboardMetric === 'totals') {
      return {
        points: [...data].sort((a, b) => b.points - a.points),
        goals: [...data].sort((a, b) => b.goals - a.goals),
        assists: [...data].sort((a, b) => b.assists - a.assists),
        cleanSheets: [...data].sort((a, b) => b.cleanSheets - a.cleanSheets)
      };
    } else {
      return {
        points: [...data].sort((a, b) => (b.points/b.gameweeks) - (a.points/a.gameweeks)),
        goals: [...data].sort((a, b) => (b.goals/b.gameweeks) - (a.goals/a.gameweeks)),
        assists: [...data].sort((a, b) => (b.assists/b.gameweeks) - (a.assists/a.gameweeks)),
        cleanSheets: [...data].sort((a, b) => (b.cleanSheets/b.gameweeks) - (a.cleanSheets/a.gameweeks))
      };
    }
  }, [yearFilter, leaderboardMetric]);

  const TotalsCard = ({ year, data }) => {
    if (!data) {
      return (
        <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs font-semibold">No data</p>
        </div>
      );
    }

    return (
      <div className={`rounded-lg p-2 ${year === '2025' ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-gradient-to-br from-purple-50 to-purple-100'}`}>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-bold text-gray-800">{year} Totals</span>
          <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${year === '2025' ? 'bg-blue-600 text-white' : 'bg-purple-600 text-white'}`}>
            {data.avg.toFixed(2)}
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Points</p>
            <p className="text-base font-bold text-gray-800">{data.points}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Goals</p>
            <p className="text-base font-bold text-gray-800">{data.goals}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Assists</p>
            <p className="text-base font-bold text-gray-800">{data.assists}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Clean</p>
            <p className="text-base font-bold text-gray-800">{data.cleanSheets}</p>
          </div>
        </div>

        <div className="mt-1.5 pt-1.5 border-t border-gray-300 grid grid-cols-2 gap-1 text-xs">
          <div className="text-center">
            <p className="text-gray-600">GWs</p>
            <p className="font-semibold text-gray-800">{data.gameweeks}</p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Games</p>
            <p className="font-semibold text-gray-800">{data.games}</p>
          </div>
        </div>
      </div>
    );
  };

  const AveragesCard = ({ year, data }) => {
    if (!data) {
      return (
        <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs font-semibold">No data</p>
        </div>
      );
    }

    const avgPoints = (data.points / data.gameweeks).toFixed(2);
    const avgGoals = (data.goals / data.gameweeks).toFixed(2);
    const avgAssists = (data.assists / data.gameweeks).toFixed(2);
    const avgClean = (data.cleanSheets / data.gameweeks).toFixed(2);

    return (
      <div className={`rounded-lg p-2 ${year === '2025' ? 'bg-gradient-to-br from-green-50 to-green-100' : 'bg-gradient-to-br from-amber-50 to-amber-100'}`}>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-xs font-bold text-gray-800">{year} Per GW</span>
          <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${year === '2025' ? 'bg-green-600 text-white' : 'bg-amber-600 text-white'}`}>
            AVG
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Points</p>
            <p className="text-base font-bold text-gray-800">{avgPoints}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Goals</p>
            <p className="text-base font-bold text-gray-800">{avgGoals}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Assists</p>
            <p className="text-base font-bold text-gray-800">{avgAssists}</p>
          </div>
          <div className="bg-white bg-opacity-60 rounded p-1 text-center">
            <p className="text-xs text-gray-600">Clean</p>
            <p className="text-base font-bold text-gray-800">{avgClean}</p>
          </div>
        </div>

        <div className="mt-1.5 pt-1.5 border-t border-gray-300 text-center text-xs">
          <p className="text-gray-600">Based on {data.gameweeks} GWs</p>
        </div>
      </div>
    );
  };

  const RadarCard = ({ year, data }) => {
    if (!data) {
      return (
        <div className="bg-gray-100 rounded-lg p-2 flex items-center justify-center h-full">
          <p className="text-gray-500 text-xs font-semibold">No data</p>
        </div>
      );
    }

    const radarData = [
      { metric: 'Goals', value: data.goals, fullMark: 150 },
      { metric: 'Assists', value: data.assists, fullMark: 50 },
      { metric: 'Clean', value: data.cleanSheets, fullMark: 150 }
    ];

    return (
      <div className={`rounded-lg p-2 ${year === '2025' ? 'bg-gradient-to-br from-indigo-50 to-indigo-100' : 'bg-gradient-to-br from-rose-50 to-rose-100'}`}>
        <div className="text-center mb-1">
          <span className="text-xs font-bold text-gray-800">{year} Radar</span>
        </div>
        
        <ResponsiveContainer width="100%" height={100}>
          <RadarChart data={radarData}>
            <PolarGrid stroke="#ccc" />
            <PolarAngleAxis dataKey="metric" tick={{ fontSize: 9 }} />
            <PolarRadiusAxis angle={90} domain={[0, 'dataMax']} tick={false} />
            <Radar 
              dataKey="value" 
              stroke={year === '2025' ? '#4f46e5' : '#e11d48'} 
              fill={year === '2025' ? '#4f46e5' : '#e11d48'} 
              fillOpacity={0.5} 
            />
          </RadarChart>
        </ResponsiveContainer>
        
        <div className="text-center text-xs text-gray-600 mt-1">
          Performance Profile
        </div>
      </div>
    );
  };

  const LeaderboardCard = ({ title, data, icon: Icon, color, metric }) => (
    <div className="bg-white rounded-xl shadow-lg p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className={`p-1.5 rounded-lg ${color}`}>
          <Icon size={18} className="text-white" />
        </div>
        <h2 className="text-sm font-bold text-gray-800">{title}</h2>
      </div>
      <div className="space-y-1.5">
        {data.map((player, idx) => (
          <div key={idx} className={`flex items-center justify-between p-1.5 rounded-lg ${idx === 0 ? 'bg-gradient-to-r from-yellow-100 to-orange-100' : idx === 1 ? 'bg-gray-100' : idx === 2 ? 'bg-gray-50' : 'bg-white border border-gray-100'}`}>
            <div className="flex items-center gap-2">
              <span className={`text-sm font-bold min-w-[20px] ${idx === 0 ? 'text-orange-600' : idx === 1 ? 'text-gray-500' : idx === 2 ? 'text-amber-600' : 'text-gray-400'}`}>
                {idx + 1}
              </span>
              <span className="font-semibold text-gray-800 text-xs">{player.name}</span>
            </div>
            <span className={`text-sm font-bold ${idx === 0 ? 'text-orange-600' : 'text-gray-700'}`}>
              {leaderboardMetric === 'totals' ? player[metric] : (player[metric] / player.gameweeks).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-2">
      <div className="max-w-7xl mx-auto">
        <header className="mb-3">
          <h1 className="text-xl font-bold text-gray-800 mb-1">Player Stats</h1>
          <p className="text-xs text-gray-600">2024-2025 Season</p>
        </header>

        <div className="flex flex-wrap gap-2 mb-3">
          <button
            onClick={() => setViewMode('allplayers')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${viewMode === 'allplayers' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            All Players
          </button>
          <button
            onClick={() => setViewMode('leaderboards')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${viewMode === 'leaderboards' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Leaderboards
          </button>
          <button
            onClick={() => setViewMode('comparison')}
            className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${viewMode === 'comparison' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
          >
            Comparison
          </button>
        </div>

        {viewMode === 'allplayers' && (
          <div className="space-y-3">
            {allPlayersData.map(({ name, data2024, data2025 }) => (
              <div key={name} className="bg-white rounded-xl shadow-lg p-2">
                <h2 className="text-lg font-bold text-gray-800 mb-2 pb-1 border-b-2 border-blue-500">{name}</h2>
                <div className="grid grid-cols-2 gap-2">
                  <TotalsCard year="2025" data={data2025} />
                  <TotalsCard year="2024" data={data2024} />
                  <AveragesCard year="2025" data={data2025} />
                  <AveragesCard year="2024" data={data2024} />
                  <RadarCard year="2025" data={data2025} />
                  <RadarCard year="2024" data={data2024} />
                </div>
              </div>
            ))}
          </div>
        )}

        {viewMode === 'leaderboards' && (
          <div>
            <div className="mb-3 flex flex-col gap-2">
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-1 flex gap-1">
                  <button
                    onClick={() => setYearFilter('2025')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${yearFilter === '2025' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    2025
                  </button>
                  <button
                    onClick={() => setYearFilter('2024')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${yearFilter === '2024' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    2024
                  </button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-lg shadow-md p-1 flex gap-1">
                  <button
                    onClick={() => setLeaderboardMetric('totals')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${leaderboardMetric === 'totals' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Totals
                  </button>
                  <button
                    onClick={() => setLeaderboardMetric('averages')}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${leaderboardMetric === 'averages' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Averages
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <LeaderboardCard
                title={leaderboardMetric === 'totals' ? "Top Points" : "Points per GW"}
                data={topPerformers.points}
                icon={Award}
                color="bg-gradient-to-br from-orange-500 to-red-500"
                metric="points"
              />
              <LeaderboardCard
                title={leaderboardMetric === 'totals' ? "Top Goals" : "Goals per GW"}
                data={topPerformers.goals}
                icon={Target}
                color="bg-gradient-to-br from-green-500 to-emerald-500"
                metric="goals"
              />
              <LeaderboardCard
                title={leaderboardMetric === 'totals' ? "Top Assists" : "Assists per GW"}
                data={topPerformers.assists}
                icon={Users}
                color="bg-gradient-to-br from-blue-500 to-indigo-500"
                metric="assists"
              />
              <LeaderboardCard
                title={leaderboardMetric === 'totals' ? "Top Clean Sheets" : "Clean Sheets per GW"}
                data={topPerformers.cleanSheets}
                icon={Shield}
                color="bg-gradient-to-br from-purple-500 to-pink-500"
                metric="cleanSheets"
              />
            </div>
          </div>
        )}

        {viewMode === 'comparison' && (
          <div>
            <div className="mb-3 flex justify-center">
              <div className="bg-white rounded-lg shadow-md p-1 flex gap-1">
                <button
                  onClick={() => setComparisonMode('percentage')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${comparisonMode === 'percentage' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  % Change
                </button>
                <button
                  onClick={() => setComparisonMode('absolute')}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition ${comparisonMode === 'absolute' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700'}`}
                >
                  +/- Change
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-3 mb-3 overflow-x-auto">
              <h2 className="text-sm font-bold text-gray-800 mb-3">Year-over-Year Changes</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-2 px-1 font-bold text-xs">Player</th>
                      <th className="text-center py-2 px-1 font-bold text-xs">Pts 25</th>
                      <th className="text-center py-2 px-1 font-bold text-xs">Pts</th>
                      <th className="text-center py-2 px-1 font-bold text-xs">Goals</th>
                      <th className="text-center py-2 px-1 font-bold text-xs">Ast</th>
                      <th className="text-center py-2 px-1 font-bold text-xs">CS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((player, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-2 px-1 font-semibold text-xs">{player.name}</td>
                        <td className="text-center py-2 px-1 font-semibold">{player.points2025}</td>
                        <td className="text-center py-2 px-1">
                          <span className={`font-semibold ${
                            comparisonMode === 'percentage' 
                              ? (player.pointsChange > 0 ? 'text-green-600' : player.pointsChange < 0 ? 'text-red-600' : 'text-gray-600')
                              : (player.pointsAbsolute > 0 ? 'text-green-600' : player.pointsAbsolute < 0 ? 'text-red-600' : 'text-gray-600')
                          }`}>
                            {comparisonMode === 'percentage' 
                              ? `${player.pointsChange > 0 ? '+' : ''}${player.pointsChange.toFixed(0)}%`
                              : `${player.pointsAbsolute > 0 ? '+' : ''}${player.pointsAbsolute}`
                            }
                          </span>
                        </td>
                        <td className="text-center py-2 px-1">
                          <span className={`font-semibold ${
                            comparisonMode === 'percentage'
                              ? (player.goalsChange > 0 ? 'text-green-600' : player.goalsChange < 0 ? 'text-red-600' : 'text-gray-600')
                              : (player.goalsAbsolute > 0 ? 'text-green-600' : player.goalsAbsolute < 0 ? 'text-red-600' : 'text-gray-600')
                          }`}>
                            {comparisonMode === 'percentage'
                              ? `${player.goalsChange > 0 ? '+' : ''}${player.goalsChange.toFixed(0)}%`
                              : `${player.goalsAbsolute > 0 ? '+' : ''}${player.goalsAbsolute}`
                            }
                          </span>
                        </td>
                        <td className="text-center py-2 px-1">
                          <span className={`font-semibold ${
                            comparisonMode === 'percentage'
                              ? (player.assistsChange > 0 ? 'text-green-600' : player.assistsChange < 0 ? 'text-red-600' : 'text-gray-600')
                              : (player.assistsAbsolute > 0 ? 'text-green-600' : player.assistsAbsolute < 0 ? 'text-red-600' : 'text-gray-600')
                          }`}>
                            {comparisonMode === 'percentage'
                              ? `${player.assistsChange > 0 ? '+' : ''}${player.assistsChange.toFixed(0)}%`
                              : `${player.assistsAbsolute > 0 ? '+' : ''}${player.assistsAbsolute}`
                            }
                          </span>
                        </td>
                        <td className="text-center py-2 px-1">
                          <span className={`font-semibold ${
                            comparisonMode === 'percentage'
                              ? (player.cleanSheetsChange > 0 ? 'text-green-600' : player.cleanSheetsChange < 0 ? 'text-red-600' : 'text-gray-600')
                              : (player.cleanSheetsAbsolute > 0 ? 'text-green-600' : player.cleanSheetsAbsolute < 0 ? 'text-red-600' : 'text-gray-600')
                          }`}>
                            {comparisonMode === 'percentage'
                              ? `${player.cleanSheetsChange > 0 ? '+' : ''}${player.cleanSheetsChange.toFixed(0)}%`
                              : `${player.cleanSheetsAbsolute > 0 ? '+' : ''}${player.cleanSheetsAbsolute}`
                            }
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-3">
              <h2 className="text-sm font-bold text-gray-800 mb-2">Points Change Visualization</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={comparisonData.slice(0, 12)}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} tick={{ fontSize: 9 }} />
                  <YAxis tick={{ fontSize: 9 }} />
                  <Tooltip />
                  <Bar 
                    dataKey={comparisonMode === 'percentage' ? 'pointsChange' : 'pointsAbsolute'} 
                    fill="#3b82f6" 
                    name={comparisonMode === 'percentage' ? 'Change %' : '+/- Points'} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;