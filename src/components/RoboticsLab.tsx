import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Settings, Zap, Cpu, Target } from 'lucide-react';

const RoboticsLab = () => {
  const [activeSimulation, setActiveSimulation] = useState('swarm');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [isPlaying, setIsPlaying] = useState(false);

  // Swarm simulation state
  const botsRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  // Robot arm simulation state
  const armRef = useRef({
    shoulder: 0,
    elbow: 0,
    wrist: 0
  });

  // Pathfinding simulation state
  const mazeRef = useRef<number[][]>([]);
  const pathRef = useRef<{x: number, y: number}[]>([]);

  useEffect(() => {
    initializeSimulation();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeSimulation]);

  const initializeSimulation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 400;

    switch (activeSimulation) {
      case 'swarm':
        initSwarmSimulation();
        break;
      case 'arm':
        initArmSimulation();
        break;
      case 'pathfinding':
        initPathfindingSimulation();
        break;
    }
  };

  const initSwarmSimulation = () => {
    botsRef.current = [];
    for (let i = 0; i < 20; i++) {
      botsRef.current.push({
        x: Math.random() * 600,
        y: Math.random() * 400,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: 4 + Math.random() * 4
      });
    }
  };

  const initArmSimulation = () => {
    armRef.current = { shoulder: 0, elbow: 0, wrist: 0 };
  };

  const initPathfindingSimulation = () => {
    const maze = [];
    for (let i = 0; i < 20; i++) {
      maze[i] = [];
      for (let j = 0; j < 30; j++) {
        maze[i][j] = Math.random() < 0.3 ? 1 : 0; // 30% walls
      }
    }
    // Ensure start and end are clear
    maze[1][1] = 0;
    maze[18][28] = 0;
    mazeRef.current = maze;
    pathRef.current = [];
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#0a0a0a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    switch (activeSimulation) {
      case 'swarm':
        animateSwarm(ctx);
        break;
      case 'arm':
        animateArm(ctx);
        break;
      case 'pathfinding':
        animatePathfinding(ctx);
        break;
    }

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  const animateSwarm = (ctx: CanvasRenderingContext2D) => {
    const bots = botsRef.current;
    const mouse = mouseRef.current;

    // Update bot positions
    bots.forEach((bot, i) => {
      // Attraction to mouse
      const dx = mouse.x - bot.x;
      const dy = mouse.y - bot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist > 0) {
        bot.vx += (dx / dist) * 0.1;
        bot.vy += (dy / dist) * 0.1;
      }

      // Separation from other bots
      bots.forEach((other, j) => {
        if (i !== j) {
          const dx2 = other.x - bot.x;
          const dy2 = other.y - bot.y;
          const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
          
          if (dist2 < 30 && dist2 > 0) {
            bot.vx -= (dx2 / dist2) * 0.5;
            bot.vy -= (dy2 / dist2) * 0.5;
          }
        }
      });

      // Apply velocity
      bot.x += bot.vx;
      bot.y += bot.vy;

      // Damping
      bot.vx *= 0.95;
      bot.vy *= 0.95;

      // Boundary conditions
      if (bot.x < 0 || bot.x > 600) bot.vx *= -1;
      if (bot.y < 0 || bot.y > 400) bot.vy *= -1;
      bot.x = Math.max(0, Math.min(600, bot.x));
      bot.y = Math.max(0, Math.min(400, bot.y));

      // Draw bot
      ctx.fillStyle = '#14b8a6';
      ctx.beginPath();
      ctx.arc(bot.x, bot.y, bot.size, 0, Math.PI * 2);
      ctx.fill();

      // Draw connection lines
      ctx.strokeStyle = 'rgba(20, 184, 166, 0.3)';
      ctx.lineWidth = 1;
      bots.forEach((other, j) => {
        if (i < j) {
          const dx3 = other.x - bot.x;
          const dy3 = other.y - bot.y;
          const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
          
          if (dist3 < 50) {
            ctx.beginPath();
            ctx.moveTo(bot.x, bot.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      });
    });

    // Draw mouse position
    ctx.fillStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 8, 0, Math.PI * 2);
    ctx.fill();
  };

  const animateArm = (ctx: CanvasRenderingContext2D) => {
    const arm = armRef.current;
    const centerX = 300;
    const centerY = 350;

    // Update arm angles
    arm.shoulder += 0.01;
    arm.elbow += 0.015;
    arm.wrist += 0.02;

    // Calculate joint positions
    const shoulderLength = 100;
    const elbowLength = 80;
    const wristLength = 60;

    const shoulderX = centerX + Math.cos(arm.shoulder) * shoulderLength;
    const shoulderY = centerY + Math.sin(arm.shoulder) * shoulderLength;

    const elbowX = shoulderX + Math.cos(arm.shoulder + arm.elbow) * elbowLength;
    const elbowY = shoulderY + Math.sin(arm.shoulder + arm.elbow) * elbowLength;

    const wristX = elbowX + Math.cos(arm.shoulder + arm.elbow + arm.wrist) * wristLength;
    const wristY = elbowY + Math.sin(arm.shoulder + arm.elbow + arm.wrist) * wristLength;

    // Draw arm segments
    ctx.strokeStyle = '#14b8a6';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Base to shoulder
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(shoulderX, shoulderY);
    ctx.stroke();

    // Shoulder to elbow
    ctx.strokeStyle = '#8b5cf6';
    ctx.beginPath();
    ctx.moveTo(shoulderX, shoulderY);
    ctx.lineTo(elbowX, elbowY);
    ctx.stroke();

    // Elbow to wrist
    ctx.strokeStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.moveTo(elbowX, elbowY);
    ctx.lineTo(wristX, wristY);
    ctx.stroke();

    // Draw joints
    ctx.fillStyle = '#ffd93d';
    [
      { x: centerX, y: centerY },
      { x: shoulderX, y: shoulderY },
      { x: elbowX, y: elbowY },
      { x: wristX, y: wristY }
    ].forEach(joint => {
      ctx.beginPath();
      ctx.arc(joint.x, joint.y, 6, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw end effector trail
    ctx.fillStyle = 'rgba(255, 107, 107, 0.3)';
    ctx.beginPath();
    ctx.arc(wristX, wristY, 12, 0, Math.PI * 2);
    ctx.fill();
  };

  const animatePathfinding = (ctx: CanvasRenderingContext2D) => {
    const maze = mazeRef.current;
    const cellSize = 20;

    // Draw maze
    for (let i = 0; i < maze.length; i++) {
      for (let j = 0; j < maze[i].length; j++) {
        if (maze[i][j] === 1) {
          ctx.fillStyle = '#2a2a2a';
          ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
      }
    }

    // Draw start and end
    ctx.fillStyle = '#14b8a6';
    ctx.fillRect(1 * cellSize, 1 * cellSize, cellSize, cellSize);
    
    ctx.fillStyle = '#ff6b6b';
    ctx.fillRect(28 * cellSize, 18 * cellSize, cellSize, cellSize);

    // Simple pathfinding visualization (mock)
    if (pathRef.current.length === 0) {
      // Generate a simple path for visualization
      const path = [];
      for (let i = 1; i < 28; i += 2) {
        path.push({ x: i, y: 1 + Math.floor(Math.sin(i * 0.3) * 8) + 8 });
      }
      pathRef.current = path;
    }

    // Draw path
    ctx.strokeStyle = '#8b5cf6';
    ctx.lineWidth = 3;
    ctx.beginPath();
    pathRef.current.forEach((point, index) => {
      const x = point.x * cellSize + cellSize / 2;
      const y = point.y * cellSize + cellSize / 2;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Draw robot
    const robotIndex = Math.floor(Date.now() / 200) % pathRef.current.length;
    const robotPos = pathRef.current[robotIndex];
    if (robotPos) {
      ctx.fillStyle = '#ffd93d';
      ctx.beginPath();
      ctx.arc(
        robotPos.x * cellSize + cellSize / 2,
        robotPos.y * cellSize + cellSize / 2,
        8,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      animate();
    }
  };

  const resetSimulation = () => {
    setIsPlaying(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    initializeSimulation();
  };

  const simulations = [
    {
      id: 'swarm',
      name: 'Swarm Robotics',
      icon: <Zap className="w-5 h-5" />,
      description: 'Multiple robots follow cursor with flocking behavior'
    },
    {
      id: 'arm',
      name: 'Robot Arm',
      icon: <Cpu className="w-5 h-5" />,
      description: '3D robot arm with inverse kinematics'
    },
    {
      id: 'pathfinding',
      name: 'Pathfinding',
      icon: <Target className="w-5 h-5" />,
      description: 'A* algorithm solving maze navigation'
    }
  ];

  return (
    <section id="robotics" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 doodle-font">
            Robotics{' '}
            <span className="bg-gradient-to-r from-neon-teal to-neon-purple bg-clip-text text-transparent">
              Laboratory
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interactive simulations showcasing robotics algorithms, AI behaviors, and autonomous systems. 
            Click and interact with each simulation to see the magic happen!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Simulation Controls */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 doodle-font">Simulations</h3>
            
            {simulations.map((sim) => (
              <button
                key={sim.id}
                onClick={() => {
                  setActiveSimulation(sim.id);
                  setIsPlaying(false);
                }}
                className={`w-full p-4 rounded-xl transition-all duration-200 text-left energy-ripple ${
                  activeSimulation === sim.id
                    ? 'bg-gradient-to-r from-neon-teal to-neon-purple text-white neon-glow'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600 border border-neon-teal/20'
                }`}
              >
                <div className="flex items-center space-x-3 mb-2">
                  {sim.icon}
                  <span className="font-semibold">{sim.name}</span>
                </div>
                <p className="text-sm opacity-80">{sim.description}</p>
              </button>
            ))}

            {/* Control Buttons */}
            <div className="flex space-x-3 pt-4">
              <button
                onClick={togglePlayPause}
                className="flex-1 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 border border-neon-teal/20"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
              
              <button
                onClick={resetSimulation}
                className="bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center border border-neon-purple/20"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>

            {/* Simulation Info */}
            <div className="bg-dark-800 rounded-xl p-4 border border-neon-teal/20">
              <h4 className="font-semibold text-white mb-2 flex items-center">
                <Settings className="w-4 h-4 mr-2 text-neon-teal" />
                How it works
              </h4>
              <div className="text-sm text-gray-300 space-y-2">
                {activeSimulation === 'swarm' && (
                  <div>
                    <p>• Boids algorithm with separation, alignment, and cohesion</p>
                    <p>• Move your mouse to attract the swarm</p>
                    <p>• Watch emergent flocking behavior</p>
                  </div>
                )}
                {activeSimulation === 'arm' && (
                  <div>
                    <p>• Forward kinematics simulation</p>
                    <p>• Multi-joint robot arm movement</p>
                    <p>• Real-time 3D visualization</p>
                  </div>
                )}
                {activeSimulation === 'pathfinding' && (
                  <div>
                    <p>• A* pathfinding algorithm</p>
                    <p>• Dynamic obstacle avoidance</p>
                    <p>• Optimal path calculation</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Simulation Canvas */}
          <div className="lg:col-span-2">
            <div className="bg-dark-800 rounded-2xl p-6 border border-neon-teal/20">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white doodle-font">
                  {simulations.find(s => s.id === activeSimulation)?.name}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-green-400' : 'bg-red-400'} animate-pulse`}></div>
                  <span className="text-sm text-gray-400">
                    {isPlaying ? 'Running' : 'Stopped'}
                  </span>
                </div>
              </div>
              
              <div className="relative">
                <canvas
                  ref={canvasRef}
                  onMouseMove={handleCanvasMouseMove}
                  className="w-full h-auto bg-dark-900 rounded-lg border border-neon-teal/30 cursor-crosshair"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
                
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center bg-dark-900/80 rounded-lg">
                    <button
                      onClick={togglePlayPause}
                      className="bg-gradient-to-r from-neon-teal to-neon-purple text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 neon-glow flex items-center space-x-2"
                    >
                      <Play className="w-5 h-5" />
                      <span>Start Simulation</span>
                    </button>
                  </div>
                )}
              </div>
              
              <div className="mt-4 text-sm text-gray-400 text-center">
                {activeSimulation === 'swarm' && 'Move your mouse over the canvas to interact with the swarm'}
                {activeSimulation === 'arm' && 'Watch the robot arm move with smooth kinematics'}
                {activeSimulation === 'pathfinding' && 'The yellow robot finds the optimal path through the maze'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsLab;