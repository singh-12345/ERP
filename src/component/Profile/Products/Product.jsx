import React from 'react';

const Product = () => {
  const segments = [
    { id: 1, title: 'Sales &', subtitle: 'Procurement', color: '#E53E3E', startAngle: 0, endAngle: 45 },
    { id: 2, title: 'Human', subtitle: 'Resource', color: '#DD6B20', startAngle: 45, endAngle: 90 },
    { id: 3, title: 'Contract &', subtitle: 'Service', color: '#38A169', startAngle: 90, endAngle: 135 },
    { id: 4, title: 'Accounting', subtitle: '', color: '#319795', startAngle: 135, endAngle: 180 },
    { id: 5, title: 'Project', subtitle: '', color: '#3182CE', startAngle: 180, endAngle: 225 },
    { id: 6, title: 'Production &', subtitle: 'Inventory', color: '#553C9A', startAngle: 225, endAngle: 270 },
    { id: 7, title: 'Business', subtitle: 'Analytics', color: '#4A5568', startAngle: 270, endAngle: 315 },
    { id: 8, title: 'CRM', subtitle: '', color: '#E53E3E', startAngle: 315, endAngle: 360 }
  ];

  const createSegmentPath = (innerRadius, outerRadius, startAngle, endAngle) => {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = Math.cos(startAngleRad);
    const y1 = Math.sin(startAngleRad);
    const x2 = Math.cos(endAngleRad);
    const y2 = Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return `
      M ${innerRadius * x1} ${innerRadius * y1}
      L ${outerRadius * x1} ${outerRadius * y1}
      A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerRadius * x2} ${outerRadius * y2}
      L ${innerRadius * x2} ${innerRadius * y2}
      A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerRadius * x1} ${innerRadius * y1}
      Z
    `;
  };

  const getTextPosition = (angle, radius) => {
    const angleRad = (angle * Math.PI) / 180;
    return {
      x: radius * Math.cos(angleRad),
      y: radius * Math.sin(angleRad)
    };
  };

  const handleMouseEnter = (e) => {
    e.target.style.filter = 'brightness(1.1)';
    e.target.style.transform = 'scale(1.02)';
  };

  const handleMouseLeave = (e) => {
    e.target.style.filter = 'brightness(1)';
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center w-2287  bg-light">
      <div className="p-4 d-flex justify-content-center align-items-center mt-5">
        <div className="position-relative d-flex justify-content-center align-items-center bg-white rounded-circle shadow-lg p-3 mt-5">
          <svg width="500" height="500" viewBox="-200 -200 400 400" className="w-100 h-100" style={{maxWidth: '600px', maxHeight: '600px'}}>
            {segments.map((segment) => {
              const midAngle = (segment.startAngle + segment.endAngle) / 2;
              const textPos = getTextPosition(midAngle, 130);
              
              return (
                <g key={segment.id} style={{cursor: 'pointer'}}>
                  <path
                    d={createSegmentPath(80, 180, segment.startAngle, segment.endAngle)}
                    fill={segment.color}
                    stroke="white"
                    strokeWidth="2"
                    style={{
                      transition: 'all 0.3s ease',
                      transformOrigin: 'center'
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                  <text
                    x={textPos.x}
                    y={textPos.y - (segment.subtitle ? 8 : 0)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    style={{
                      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                      fontSize: '13px',
                      fontWeight: '600',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                      pointerEvents: 'none'
                    }}
                  >
                    {segment.title}
                  </text>
                  {segment.subtitle && (
                    <text
                      x={textPos.x}
                      y={textPos.y + 12}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      style={{
                        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                        fontSize: '13px',
                        fontWeight: '600',
                        textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                        pointerEvents: 'none'
                      }}
                    >
                      {segment.subtitle}
                    </text>
                  )}
                </g>
              );
            })}
            
            <circle 
              cx="0" 
              cy="0" 
              r="75" 
              fill="white" 
              stroke="#f8f9fa" 
              strokeWidth="3"
              style={{filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.15))'}}
            />
            
            {/* <text 
              x="0" 
              y="-15" 
              textAnchor="middle"
              style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '24px',
                fontWeight: '700',
                fill: '#2b6cb0'
              }}
            >
              Synergix
            </text> */}

            <text 
              x="0" 
              y="-5" 
              textAnchor="middle"
              style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '20px',
                fontWeight: '700',
                fill: '#e53e3e'
              }}
            >
              ERP
            </text>
            <text 
              x="0" 
              y="15" 
              textAnchor="middle"
              style={{
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                fontSize: '16px',
                fontWeight: '600',
                fill: '#4299e1'
              }}
            >
              Software
            </text>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Product;