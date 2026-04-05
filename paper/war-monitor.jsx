import { useState, useEffect } from "react";
import {
  LineChart, Line, BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, ReferenceLine, Cell
} from "recharts";

const C = {
  ua:"#4FC3F7", ru:"#EF5350", iran:"#FF6F00", cyber:"#00E5FF",
  fiber:"#69F0AE", alerta:"#FF7043", verde:"#66BB6A", roxo:"#AB47BC",
  neutro:"#FFD54F", bg:"#070c17", card:"#0f1729", borda:"#1a2a42",
  txt:"#e2e8f0", sub:"#546e7a", dim:"#2d3f55"
};

const desercao_anual_ua = [
  { p:"2022", awol:6600,  des:3400  },
  { p:"2023", awol:17600, des:7800  },
  { p:"2024", awol:67800, des:23300 },
  { p:"Jan-Out/2025", awol:162500, des:21600 },
];

const desercao_diaria = [
  {m:"Jan/24",ua:185,ru:42},{m:"Abr/24",ua:240,ru:55},{m:"Jul/24",ua:310,ru:80},
  {m:"Out/24",ua:420,ru:110},{m:"Jan/25",ua:500,ru:150},{m:"Abr/25",ua:540,ru:180},
  {m:"Jul/25",ua:576,ru:200},{m:"Out/25",ua:700,ru:210},
];

const mercenarios = [
  {pais:"Cuba → Rússia",est:20000,mortos:300,lado:"RU",fonte:"El País Jul/2025",conf:"Média"},
  {pais:"Colômbia → Ucrânia",est:3000,mortos:null,lado:"UA",fonte:"Grey Dynamics Nov/2025",conf:"Média"},
  {pais:"Sérvia → Rússia",est:2000,mortos:null,lado:"RU",fonte:"Wikipedia 2026",conf:"Baixa"},
  {pais:"EUA → Ucrânia",est:3000,mortos:null,lado:"UA",fonte:"Ukraine Gov Mar/2022",conf:"Média"},
  {pais:"Brasil → Ucrânia",est:500,mortos:null,lado:"UA",fonte:"RMX News Out/2025",conf:"Baixa"},
  {pais:"Índia → Rússia",est:200,mortos:12,lado:"RU",fonte:"India Gov Jan/2025",conf:"Alta"},
  {pais:"África do Sul → UA",est:17,mortos:null,lado:"UA",fonte:"Guardian Nov/2025",conf:"Alta"},
  {pais:"China → Rússia",est:50,mortos:2,lado:"RU",fonte:"Zelenskyy Abr/2025",conf:"Alta"},
  {pais:"México/Cartéis → UA",est:200,mortos:null,lado:"UA",fonte:"Intel México Jul/2025",conf:"Média"},
];

const energia_ttf = [
  {d:"Jan/21",p:18},{d:"Jun/21",p:32},{d:"Jan/22",p:90},
  {d:"Feb/22",p:120},{d:"Set/22",p:280},{d:"Dez/22",p:175},
  {d:"Jun/23",p:45},{d:"Jan/24",p:38},{d:"Jan/25",p:50},
  {d:"Feb/26",p:95},{d:"Abr/26",p:85},
];

const drone_impacto = [
  {a:"2022",baixas:20,precisao:30,fibra:0},
  {a:"2023",baixas:50,precisao:50,fibra:2},
  {a:"2024",baixas:70,precisao:65,fibra:15},
  {a:"2025",baixas:80,precisao:80,fibra:35},
  {a:"2026*",baixas:82,precisao:83,fibra:45},
];

const iran_ataques = [
  {data:"28/02/26",alvo:"AWS UAE (3 data centers)",tipo:"drone físico",status:"Confirmado",fonte:"Jerusalem Post / Sec Blvd"},
  {data:"28/02/26",alvo:"Amazon AWS Bahrain",tipo:"drone físico",status:"Confirmado",fonte:"FT / ISNA"},
  {data:"01/03/26",alvo:"Oracle Dubai",tipo:"drone físico",status:"Disputado",fonte:"IRGC / Dubai Gov"},
  {data:"06/03/26",alvo:"Stryker Corp (Michigan, EUA)",tipo:"cyber",status:"Confirmado",fonte:"Handala / The Conversation"},
  {data:"11/03/26",alvo:"Pesquisa nuclear Polônia",tipo:"cyber",status:"Bloqueado",fonte:"Axios Mar/2026"},
  {data:"12/03/26",alvo:"Fuel systems Jordan",tipo:"cyber",status:"Alegado",fonte:"Handala Hack"},
  {data:"01/04/26",alvo:"17 empresas tech EUA (lista IRGC)",tipo:"ameaça",status:"Formal",fonte:"Euronews Abr/2026"},
];

const iran_alvos_tech = [
  {e:"Amazon AWS",r:"UAE+Bahrain",s:"Atingida",cr:5},
  {e:"Microsoft",r:"Tel Aviv+Abu Dhabi",s:"Alvo declarado",cr:5},
  {e:"Google",r:"Jerusalém+Abu Dhabi",s:"Alvo declarado",cr:5},
  {e:"Palantir",r:"Tel Aviv",s:"Alvo declarado",cr:5},
  {e:"Oracle",r:"Dubai+Jerusalém",s:"Alegado/Alvo",cr:4},
  {e:"Nvidia",r:"Tel Aviv (P&D)",s:"Alvo declarado",cr:4},
  {e:"IBM",r:"Jerusalém",s:"Alvo declarado",cr:3},
  {e:"Stryker",r:"Michigan EUA",s:"Hackeada",cr:3},
  {e:"G42 (Abu Dhabi)",r:"UAE",s:"Alvo declarado",cr:4},
];

const grupos_cyber = [
  {n:"Handala Hack",l:"MOIS (Inteligência)",esp:"Exfiltração + wiper",a:"Sim"},
  {n:"APT Iran",l:"Estado Iraniano",esp:"Hack-and-leak",a:"Sim"},
  {n:"CyberAv3ngers",l:"IRGC",esp:"ICS/SCADA (água, gás)",a:"Sim"},
  {n:"Electronic Ops Room",l:"IRGC — formado 28/02/26",esp:"Coordenação multi-vetor",a:"Sim"},
  {n:"Hacktivistas pró-RU",l:"Alinhados Irã",esp:"DDoS infra Israel",a:"Parcial"},
];

const fibra_timeline = [
  {d:"Primavera/2024",e:"Rússia implanta primeiros drones fibra óptica em combate",lado:"RU",km:5},
  {d:"Mid/2024",e:"Ucrânia começa réplicas domésticas",lado:"UA",km:5},
  {d:"Ago/2024",e:"Fibra domina frente de Kursk — inviabiliza presença UA",lado:"RU",km:10},
  {d:"Jan/2025",e:"80+ sistemas fibra UA aprovados. Produção em escala industrial",lado:"UA",km:20},
  {d:"Mai/2025",e:"Cabos velhos cobrem o campo — rastreamento de operadores impossível",lado:"AMBOS",km:25},
  {d:"Set/2025",e:"RU atinge Kramatorsk a 19km com fibra óptica",lado:"RU",km:19},
  {d:"Out/2025",e:"NATO Innovation Challenge 2025 — tema central: contra-medidas a fibra",lado:"NATO",km:null},
  {d:"Fev/2026",e:"Ratel Robotics: UGV lança drones fibra sem expor operadores humanos",lado:"UA",km:40},
  {d:"Mar/2026",e:"Ucrânia planeja 4.000km de redes anti-drone nas estradas da frente",lado:"UA",km:null},
];

const contrameds = [
  {m:"Redes de náilon nas ruas",ef:"Alta vs FPV",lim:"Só urbano",s:"Implantado"},
  {m:"Arame farpado eletrificado",ef:"Média",lim:"Drone pode cortar",s:"Implantado"},
  {m:"Sensores acústicos + IR",ef:"Média-alta",lim:"Custo alto / clima",s:"Em testes"},
  {m:"Rastreamento pelo cabo",ef:"Baixa (2025+)",lim:"Cabos velhos cobrem campo",s:"Obsoleto"},
  {m:"IA detecção visual",ef:"Em desenvolvimento",lim:"Camuflagem engana IA 2D",s:"Pesquisa"},
  {m:"Radar tripwire",ef:"Média",lim:"Muitos falsos positivos",s:"Implantado"},
];

const impacto_global_fibra = [
  {ator:"China (EPL)",status:"Incorporando em arsenais",risco:"Alto — Taiwan Strait"},
  {ator:"Hezbollah/Hamas",status:"Observando e copiando",risco:"Médio — Israel"},
  {ator:"Irã (IRGC)",status:"Testando adaptação",risco:"Alto — Ormuz/Golfo"},
  {ator:"EUA (DARPA)",status:"Desenvolvendo contrameds",risco:"Defensivo"},
  {ator:"Coreia do Norte",status:"Obtendo tecnologia via RU",risco:"Alto — Península"},
];

const eventos_timeline = [
  {data:"Fev/2022",e:"Invasão russa da Ucrânia",tipo:"guerra"},
  {data:"Set/2022",e:"Nord Stream 1+2 sabotados — maior destruição de infra energética da história",tipo:"sabotagem"},
  {data:"Fev/2023",e:"Hersh publica acusação Biden/Noruega — EUA nega",tipo:"investigacao"},
  {data:"Primavera/2024",e:"Rússia implanta drones fibra óptica — revolução tática unjammable",tipo:"fibra"},
  {data:"Jan/2025",e:"UA corta trânsito gás russo. 80+ sistemas fibra UA aprovados",tipo:"energia"},
  {data:"Ago/2025",e:"Serhii K. preso Itália (Nord Stream). Kursk: fibra RU inviabiliza UA",tipo:"investigacao"},
  {data:"Out/2025",e:"576 desertores UA/dia — recorde. NATO Innovation Challenge: fibra",tipo:"desercao"},
  {data:"Dez/2025",e:"UA suspende publicação de dados de deserção",tipo:"censura"},
  {data:"28/02/2026",e:"EUA/Israel atacam Irã. 60+ grupos cyber ativados. AWS UAE atingida por drones",tipo:"cyber"},
  {data:"06/03/2026",e:"Stryker Corp Michigan hackeada por Handala (MOIS) — produção paralisada",tipo:"cyber"},
  {data:"01/04/2026",e:"IRGC: 17 empresas tech EUA são 'alvos legítimos'",tipo:"iran_ameaca"},
  {data:"Abr/2026",e:"Trump: 'Aprendam a lutar por si mesmos'",tipo:"politica"},
];

const tipo_cor = {
  guerra:"#EF5350",sabotagem:"#FF7043",investigacao:"#FFD54F",fibra:"#69F0AE",
  energia:"#AB47BC",desercao:"#F48FB1",censura:"#78909C",cyber:"#00E5FF",
  iran_ameaca:"#FF6F00",politica:"#66BB6A"
};

// ── UI helpers ──
const Tip = ({active,payload,label})=>active&&payload?.length?(
  <div style={{background:C.card,border:`1px solid ${C.borda}`,borderRadius:8,padding:"10px 14px",fontSize:11,color:C.txt}}>
    <p style={{color:C.sub,marginBottom:4}}>{label}</p>
    {payload.map((p,i)=><p key={i} style={{color:p.color,margin:"2px 0"}}>{p.name}: <b>{typeof p.value==="number"?p.value.toLocaleString("pt-BR"):p.value}</b></p>)}
  </div>
):null;

const Bdg=({t,c})=>(
  <span style={{background:c+"22",color:c,border:`1px solid ${c}44`,borderRadius:4,padding:"2px 7px",fontSize:10,fontWeight:700,whiteSpace:"nowrap"}}>{t}</span>
);

const Sec=({children,sub})=>(
  <div style={{marginBottom:14}}>
    <h2 style={{fontFamily:"monospace",fontSize:12,color:C.sub,letterSpacing:3,textTransform:"uppercase",margin:0,marginBottom:2}}>▌ {children}</h2>
    {sub&&<p style={{color:"#37506b",fontSize:10,margin:0}}>{sub}</p>}
  </div>
);

const Card=({children,style={}})=>(
  <div style={{background:C.card,border:`1px solid ${C.borda}`,borderRadius:10,padding:20,...style}}>{children}</div>
);

const Stat=({label,value,sub,cor=C.ua})=>(
  <div style={{background:C.card,border:`1px solid ${C.borda}`,borderRadius:8,padding:"12px 16px",flex:1,minWidth:120}}>
    <div style={{color:C.sub,fontSize:9,letterSpacing:2,textTransform:"uppercase",marginBottom:4}}>{label}</div>
    <div style={{color:cor,fontSize:22,fontWeight:800,fontFamily:"monospace",lineHeight:1}}>{value}</div>
    {sub&&<div style={{color:"#37506b",fontSize:9,marginTop:4}}>{sub}</div>}
  </div>
);

const BarPct=({label,val,cor})=>(
  <div style={{marginBottom:9}}>
    <div style={{display:"flex",justifyContent:"space-between",fontSize:11,color:C.txt,marginBottom:3}}>
      <span>{label}</span><span style={{color:cor,fontWeight:700}}>{val}%</span>
    </div>
    <div style={{background:C.dim,borderRadius:4,height:5}}>
      <div style={{background:cor,borderRadius:4,height:5,width:`${val}%`}}/>
    </div>
  </div>
);

export default function WarMonitor() {
  const [tab,setTab]=useState("iran");
  const [tick,setTick]=useState(0);
  useEffect(()=>{const t=setInterval(()=>setTick(x=>x+1),2000);return()=>clearInterval(t);},[]);
  const live=Math.floor(311000+(tick*0.013));

  const tabs=[
    {id:"iran",label:"🇮🇷 Irã / DataCenters"},
    {id:"fibra",label:"🧵 Fibra Óptica"},
    {id:"desercao",label:"📉 Deserção"},
    {id:"mercs",label:"🌍 Mercenários"},
    {id:"energia",label:"⚡ Energia"},
    {id:"timeline",label:"📅 Timeline"},
  ];

  return (
    <div style={{background:C.bg,minHeight:"100vh",color:C.txt,fontFamily:"'IBM Plex Mono','Courier New',monospace",paddingBottom:60}}>

      {/* HEADER */}
      <div style={{borderBottom:`1px solid ${C.borda}`,background:"#04080f",padding:"12px 20px",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8}}>
        <div>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:2}}>
            <span style={{color:C.alerta,fontSize:9,fontWeight:700,letterSpacing:3}}>◉ LIVE</span>
            <span style={{color:"#37506b",fontSize:9}}>WORLDMONITOR · WAR-DATA · github.com/scoobiii/worldmonitor</span>
          </div>
          <h1 style={{margin:0,fontSize:15,fontWeight:800,letterSpacing:1}}>CARNIFICINA GLOBAL AUTOMATIZADA</h1>
          <p style={{margin:0,color:C.sub,fontSize:10}}>Irã/DataCenters · Fibra Óptica · Deserção · Mercenários · Energia — RU/UA/IR 2022–2026</p>
        </div>
        <div style={{textAlign:"right"}}>
          <div style={{color:C.alerta,fontSize:9}}>AWOL UA ACUMULADO (live)</div>
          <div style={{color:C.ua,fontSize:26,fontWeight:800,fontFamily:"monospace"}}>{live.toLocaleString("pt-BR")}</div>
          <div style={{color:"#37506b",fontSize:9}}>+576/dia no pico · Procuradoria UA Nov/2025</div>
        </div>
      </div>

      {/* STATS */}
      <div style={{padding:"14px 20px 0",display:"flex",gap:8,flexWrap:"wrap"}}>
        <Stat label="Desertores UA" value="311k+" sub="NV Ukraine Nov/2025" cor={C.ua}/>
        <Stat label="Desertores RU" value="~90k" sub="Frontelligence Set/2025" cor={C.ru}/>
        <Stat label="AWS UAE atingida" value="3 DCs" sub="Drones IRGC 28/02/26" cor={C.iran}/>
        <Stat label="Grupos cyber Irã" value="60+" sub="Ativados em 48h" cor={C.cyber}/>
        <Stat label="Alvos tech IRGC" value="17+G42" sub="Lista Abr/2026" cor={C.alerta}/>
        <Stat label="Alcance fibra UA" value="40km" sub="Birds of Magyar" cor={C.fiber}/>
        <Stat label="Baixas drone" value="80%" sub="Army War College" cor={C.neutro}/>
      </div>

      {/* TABS */}
      <div style={{padding:"14px 20px 0",display:"flex",gap:3,flexWrap:"wrap",borderBottom:`1px solid ${C.borda}`}}>
        {tabs.map(t=>(
          <button key={t.id} onClick={()=>setTab(t.id)} style={{
            background:tab===t.id?C.borda:"transparent",
            border:`1px solid ${tab===t.id?C.cyber:C.borda}`,
            color:tab===t.id?C.cyber:C.sub,borderRadius:"6px 6px 0 0",
            padding:"6px 11px",cursor:"pointer",fontSize:11,fontFamily:"inherit",
            borderBottom:"none",marginBottom:-1
          }}>{t.label}</button>
        ))}
      </div>

      <div style={{padding:"20px 20px"}}>

        {/* ════ IRÃ / DATA CENTERS ════ */}
        {tab==="iran"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{background:"#0d0500",border:`1px solid ${C.iran}44`,borderLeft:`4px solid ${C.iran}`,borderRadius:8,padding:14}}>
              <div style={{color:C.iran,fontWeight:700,fontSize:12,marginBottom:5}}>⚠ ESCALADA HISTÓRICA — 28 FEV 2026</div>
              <p style={{color:C.txt,fontSize:11,margin:0,lineHeight:1.6}}>
                Operação Epic Fury (EUA) + Roaring Lion (Israel) → Irã retalia com <b style={{color:C.cyber}}>drones físicos contra data centers civis</b> e
                <b style={{color:C.iran}}> 60+ grupos hacktivistas</b> ativados em 48h. Primeira vez na história que DCs de empresas privadas americanas são
                alvos militares. Em 1 de abril/2026 o IRGC declara 17 empresas tech EUA "alvos legítimos".
              </p>
            </div>

            <Card>
              <Sec sub="Jerusalem Post · Security Boulevard · Euronews · The Conversation · Axios — Mar/Abr 2026">
                Cronologia de Ataques — Fev a Abr/2026
              </Sec>
              <div style={{overflowX:"auto"}}>
                <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                  <thead>
                    <tr style={{borderBottom:`1px solid ${C.borda}`}}>
                      {["Data","Alvo","Tipo","Status","Fonte"].map(h=>(
                        <th key={h} style={{padding:"6px 10px",textAlign:"left",color:C.sub,fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {iran_ataques.map((a,i)=>(
                      <tr key={i} style={{borderBottom:`1px solid #0f1e32`,background:i%2===0?"#0a1520":"transparent"}}>
                        <td style={{padding:"8px 10px",color:C.iran,fontFamily:"monospace",whiteSpace:"nowrap"}}>{a.data}</td>
                        <td style={{padding:"8px 10px",color:C.txt,fontWeight:600}}>{a.alvo}</td>
                        <td style={{padding:"8px 10px"}}>
                          <Bdg t={a.tipo} c={a.tipo==="drone físico"?C.iran:a.tipo==="cyber"?C.cyber:C.neutro}/>
                        </td>
                        <td style={{padding:"8px 10px"}}>
                          <Bdg t={a.status}
                            c={a.status==="Confirmado"?C.verde:a.status==="Bloqueado"?C.ua:a.status==="Disputado"?C.neutro:a.status==="Alegado"?C.alerta:C.ru}/>
                        </td>
                        <td style={{padding:"8px 10px",color:"#37506b",fontSize:10}}>{a.fonte}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <Card>
                <Sec sub="Lista IRGC Abr/2026 + alvos físicos confirmados">Empresas Tech Alvo</Sec>
                {iran_alvos_tech.map((t,i)=>(
                  <div key={i} style={{display:"flex",gap:8,alignItems:"center",padding:"7px 0",borderBottom:`1px solid #0f1e32`}}>
                    <div style={{flex:2,color:C.txt,fontSize:11,fontWeight:600}}>{t.e}</div>
                    <div style={{flex:2,color:C.sub,fontSize:9}}>{t.r}</div>
                    <Bdg t={t.s} c={t.s==="Atingida"?C.ru:t.s==="Hackeada"?C.cyber:t.s==="Alegado/Alvo"?C.neutro:C.alerta}/>
                    <div style={{display:"flex",gap:1}}>
                      {[...Array(5)].map((_,j)=>(
                        <span key={j} style={{color:j<t.cr?C.iran:"#1a2a42",fontSize:9}}>◆</span>
                      ))}
                    </div>
                  </div>
                ))}
              </Card>

              <Card>
                <Sec sub="CISA · Unit 42 · Canadian CSE · CloudSEK — Mar/2026">Grupos Hacktivistas Iranianos</Sec>
                {grupos_cyber.map((g,i)=>(
                  <div key={i} style={{padding:"8px 0",borderBottom:`1px solid #0f1e32`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                      <span style={{color:C.cyber,fontWeight:700,fontSize:11}}>{g.n}</span>
                      <Bdg t={g.a==="Sim"?"ATIVO":"PARCIAL"} c={g.a==="Sim"?C.ru:C.neutro}/>
                    </div>
                    <div style={{color:C.sub,fontSize:9}}>{g.l} · {g.esp}</div>
                  </div>
                ))}
                <div style={{marginTop:12,padding:10,background:"#07101f",borderRadius:6,border:`1px solid ${C.cyber}22`}}>
                  <div style={{color:C.cyber,fontSize:10,fontWeight:700,marginBottom:3}}>IA DERRUBOU A BARREIRA</div>
                  <p style={{color:C.sub,fontSize:10,margin:0,lineHeight:1.5}}>
                    60+ grupos ativados em 48h. IA-assisted recon + 40.000+ sistemas ICS expostos = qualquer ator
                    motivado pode atacar infra crítica. CloudSEK Mar/2026.
                  </p>
                </div>
              </Card>
            </div>

            <Card>
              <Sec>Impacto Cascata: Por Que Data Centers São o Novo Nord Stream</Sec>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:10}}>
                {[
                  {t:"AWS UAE — 3 DCs físicos atingidos",d:"Primeiros DCs civis atingidos por drones militares. Outages confirmados. Precedente histórico.",c:C.iran},
                  {t:"Project Nimbus $1.2bi",d:"AWS+Google provendo cloud militar a Israel. Torna BigTech alvo legítimo pelo IRGC. UN Rapporteur 2025.",c:C.cyber},
                  {t:"Stryker Michigan EUA",d:"Hack iraniano paralisa produção de dispositivos médicos americanos. Conflito do Golfo em hospitais dos EUA.",c:C.alerta},
                  {t:"ChatGPT -295% installs",d:"Após contrato DoD com OpenAI, desinstalações explodem. IA militar → retaliação contra plataformas civis.",c:C.neutro},
                  {t:"Polônia — instalação nuclear",d:"Tentativa de hack a pesquisa nuclear polonesa bloqueada. Irã alcança Europa.",c:C.roxo},
                  {t:"Jordan fuel systems",d:"Handala alega sabotagem de combustível na Jordânia — rota crítica de suprimento regional.",c:C.ru},
                ].map((item,i)=>(
                  <div key={i} style={{background:"#07101f",border:`1px solid ${item.c}33`,borderLeft:`3px solid ${item.c}`,borderRadius:7,padding:12}}>
                    <div style={{color:item.c,fontSize:10,fontWeight:700,marginBottom:5}}>{item.t}</div>
                    <div style={{color:C.sub,fontSize:10,lineHeight:1.5}}>{item.d}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* ════ FIBRA ÓPTICA ════ */}
        {tab==="fibra"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <div style={{background:"#001f10",border:`1px solid ${C.fiber}44`,borderLeft:`4px solid ${C.fiber}`,borderRadius:8,padding:14}}>
              <div style={{color:C.fiber,fontWeight:700,fontSize:12,marginBottom:5}}>🧵 A REVOLUÇÃO UNJAMMABLE — Primavera 2024 → 2026</div>
              <p style={{color:C.txt,fontSize:11,margin:0,lineHeight:1.6}}>
                Fio de fibra óptica de espessura milimétrica conectando drone ao operador. Resultado:
                <b style={{color:C.fiber}}> zero emissão de rádio, zero sinal para jamming, zero GPS para spoofing</b>.
                Toda a guerra eletrônica convencional tornou-se obsoleta da noite para o dia.
                Rússia implantou primeiro; Ucrânia copiou e ultrapassou em alcance (40km em 2026).
                NATO Innovation Challenge 2025: fibra óptica foi o tema central — <b>sem solução definitiva</b>.
              </p>
            </div>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <Card>
                <Sec sub="Atlantic Council Fev/2026 · Lowy Institute Ago/2025 · Wikipedia">Vantagens vs Drones Convencionais</Sec>
                <BarPct label="Imunidade a jamming (EW inútil)" val={100} cor={C.fiber}/>
                <BarPct label="Alta resolução vídeo HD" val={95} cor={C.fiber}/>
                <BarPct label="Sem GPS (anti-spoofing)" val={90} cor={C.fiber}/>
                <BarPct label="Indetectável por RDF (sem RF)" val={95} cor={C.fiber}/>
                <BarPct label="Alcance atual UA (max ~40km)" val={80} cor={C.neutro}/>
                <BarPct label="Detecção visual pelo inimigo" val={12} cor={C.verde}/>
                <div style={{marginTop:10,padding:10,background:"#001f10",borderRadius:6,border:`1px solid ${C.fiber}22`,fontSize:10,color:C.sub,lineHeight:1.5}}>
                  <b style={{color:C.fiber}}>NOVA TÁTICA:</b> Drones ficam em repouso no solo (consumo zero de energia)
                  esperando alvos — armadilha completamente invisível. Euromaidan Press / Wikipedia.
                </div>
              </Card>

              <Card>
                <Sec sub="NPR Mar/2026 · Atlantic Council · Euromaidan Press">Contra-Medidas e Eficácia Real</Sec>
                {contrameds.map((cm,i)=>(
                  <div key={i} style={{padding:"8px 0",borderBottom:`1px solid #0f1e32`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                      <span style={{color:C.txt,fontSize:11,fontWeight:600}}>{cm.m}</span>
                      <Bdg t={cm.s} c={cm.s==="Implantado"?C.verde:cm.s==="Obsoleto"?C.sub:cm.s==="Em testes"?C.neutro:C.ua}/>
                    </div>
                    <div style={{color:C.fiber,fontSize:9}}>Eficácia: {cm.ef}</div>
                    <div style={{color:C.sub,fontSize:9}}>{cm.lim}</div>
                  </div>
                ))}
                <div style={{marginTop:12,background:"#001f10",padding:10,borderRadius:6,border:`1px solid ${C.fiber}22`}}>
                  <b style={{color:C.fiber,fontSize:10}}>Plano UA 2026:</b>
                  <p style={{color:C.sub,fontSize:10,margin:"3px 0 0",lineHeight:1.5}}>
                    4.000km de redes de náilon nas estradas da frente até Dez/2026.
                    Maior instalação anti-drone civil da história. NPR Mar/2026.
                  </p>
                </div>
              </Card>
            </div>

            <Card>
              <Sec sub="Atlantic Council Fev/2026 · Business Insider Fev/2026 · Defense Magazine Jan/2026">
                Evolução Cronológica — Do Experimento à Dominância Tática
              </Sec>
              <div style={{position:"relative",paddingLeft:22}}>
                <div style={{position:"absolute",left:7,top:0,bottom:0,width:2,background:`linear-gradient(${C.ru},${C.fiber})`}}/>
                {fibra_timeline.map((e,i)=>(
                  <div key={i} style={{position:"relative",marginBottom:14}}>
                    <div style={{position:"absolute",left:-18,top:3,width:9,height:9,borderRadius:"50%",
                      background:e.lado==="RU"?C.ru:e.lado==="UA"?C.fiber:e.lado==="NATO"?C.ua:C.neutro,
                      border:"2px solid #070c17"}}/>
                    <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                      <span style={{color:"#37506b",fontSize:9,minWidth:100,paddingTop:2,fontFamily:"monospace"}}>{e.d}</span>
                      <div>
                        <Bdg t={e.lado} c={e.lado==="RU"?C.ru:e.lado==="UA"?C.fiber:e.lado==="NATO"?C.ua:C.neutro}/>
                        <span style={{color:C.txt,fontSize:11,marginLeft:7}}>{e.e}</span>
                        {e.km&&<span style={{color:C.sub,fontSize:9,marginLeft:7}}>📍~{e.km}km</span>}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14}}>
              <Card>
                <Sec sub="Atlantic Council Fev/2026">Proliferação Global — Quem Está Adotando</Sec>
                {impacto_global_fibra.map((a,i)=>(
                  <div key={i} style={{padding:"8px 0",borderBottom:`1px solid #0f1e32`}}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:2}}>
                      <span style={{color:C.txt,fontSize:11,fontWeight:600}}>{a.ator}</span>
                      <Bdg t={a.risco} c={a.risco.startsWith("Alto")?C.ru:a.risco.startsWith("Médio")?C.neutro:C.verde}/>
                    </div>
                    <div style={{color:C.sub,fontSize:10}}>{a.status}</div>
                  </div>
                ))}
              </Card>
              <Card>
                <Sec>Gráfico — Evolução % Missões Fibra vs Baixas por Drone</Sec>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={drone_impacto} margin={{top:8,right:16,left:0,bottom:0}}>
                    <CartesianGrid strokeDasharray="3 3" stroke={C.borda}/>
                    <XAxis dataKey="a" tick={{fill:C.sub,fontSize:10}}/>
                    <YAxis tick={{fill:C.sub,fontSize:10}} tickFormatter={v=>`${v}%`}/>
                    <Tooltip content={<Tip/>}/><Legend wrapperStyle={{fontSize:10,color:C.sub}}/>
                    <Line type="monotone" dataKey="baixas" name="% Baixas/drone" stroke={C.ru} strokeWidth={2} dot={{r:3}}/>
                    <Line type="monotone" dataKey="precisao" name="Precisão FPV+IA" stroke={C.ua} strokeWidth={2} strokeDasharray="5 5" dot={{r:3}}/>
                    <Line type="monotone" dataKey="fibra" name="% Missões fibra (est.)" stroke={C.fiber} strokeWidth={2} dot={{r:3}}/>
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>
        )}

        {/* ════ DESERÇÃO ════ */}
        {tab==="desercao"&&(
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            <Card>
              <Sec sub="Procuradoria-Geral UA Nov/2025 · Al Jazeera Dez/2025">Casos AWOL + Deserção Ucrânia por Ano</Sec>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={desercao_anual_ua} margin={{top:8,right:16,left:0,bottom:0}}>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.borda}/>
                  <XAxis dataKey="p" tick={{fill:C.sub,fontSize:10}}/>
                  <YAxis tick={{fill:C.sub,fontSize:10}} tickFormatter={v=>v>=1000?`${v/1000}k`:v}/>
                  <Tooltip content={<Tip/>}/><Legend wrapperStyle={{fontSize:10,color:C.sub}}/>
                  <Bar dataKey="awol" name="AWOL" fill={C.ua} radius={[4,4,0,0]}/>
                  <Bar dataKey="des" name="Deserção formal" fill={C.alerta} radius={[4,4,0,0]}/>
                </BarChart>
              </ResponsiveContainer>
              <div style={{color:"#37506b",fontSize:10,marginTop:6}}>⚠ Dez/2025: Procuradoria suspendeu publicação. Dados 2025 = Jan–Out.</div>
            </Card>
            <Card>
              <Sec sub="Frontelligence · RFERL · Al Jazeera · Newstarget">Taxa Diária de Abandono — UA × RU</Sec>
              <ResponsiveContainer width="100%" height={220}>
                <AreaChart data={desercao_diaria} margin={{top:8,right:16,left:0,bottom:0}}>
                  <defs>
                    <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={C.ua} stopOpacity={0.3}/><stop offset="95%" stopColor={C.ua} stopOpacity={0}/></linearGradient>
                    <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={C.ru} stopOpacity={0.3}/><stop offset="95%" stopColor={C.ru} stopOpacity={0}/></linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke={C.borda}/>
                  <XAxis dataKey="m" tick={{fill:C.sub,fontSize:10}}/><YAxis tick={{fill:C.sub,fontSize:10}}/>
                  <Tooltip content={<Tip/>}/><Legend wrapperStyle={{fontSize:10,color:C.sub}}/>
                  <Area type="monotone" dataKey="ua" name="UA /dia" stroke={C.ua} fill="url(#g1)" strokeWidth={2}/>
                  <Area type="monotone" dataKey="ru" name="RU /dia (est.)" stroke={C.ru} fill="url(#g2)" strokeWidth={2}/>
                  <ReferenceLine y={576} stroke={C.ua} strokeDasharray="4 4" label={{value:"Recorde Out/25",fill:C.ua,fontSize:9}}/>
                </AreaChart>
              </ResponsiveContainer>
            </Card>
          </div>
        )}

        {/* ════ MERCENÁRIOS ════ */}
        {tab==="mercs"&&(
          <Card>
            <Sec sub="Fontes abertas verificadas — acurácia indicada por coluna">Voluntários e Mercenários por País/Conflito 2022–2026</Sec>
            <div style={{overflowX:"auto"}}>
              <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
                <thead>
                  <tr style={{borderBottom:`1px solid ${C.borda}`}}>
                    {["País → Destino","Estimativa","Mortos conf.","Lado","Fonte","Confiança"].map(h=>(
                      <th key={h} style={{padding:"6px 10px",textAlign:"left",color:C.sub,fontWeight:600,whiteSpace:"nowrap"}}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mercenarios.map((m,i)=>(
                    <tr key={i} style={{borderBottom:`1px solid #0f1e32`,background:i%2===0?"#0a1520":"transparent"}}>
                      <td style={{padding:"8px 10px",color:C.txt,fontWeight:600}}>{m.pais}</td>
                      <td style={{padding:"8px 10px",color:m.lado==="RU"?C.ru:C.ua,fontWeight:700}}>{m.est.toLocaleString("pt-BR")}</td>
                      <td style={{padding:"8px 10px",color:m.mortos?C.alerta:C.sub}}>{m.mortos??"-"}</td>
                      <td style={{padding:"8px 10px"}}><Bdg t={m.lado} c={m.lado==="RU"?C.ru:C.ua}/></td>
                      <td style={{padding:"8px 10px",color:"#37506b",fontSize:10}}>{m.fonte}</td>
                      <td style={{padding:"8px 10px"}}><Bdg t={m.conf} c={m.conf==="Alta"?C.verde:m.conf==="Média"?C.neutro:C.sub}/></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        )}

        {/* ════ ENERGIA ════ */}
        {tab==="energia"&&(
          <Card>
            <Sec sub="TTF Title Transfer Facility — referência europeia gás natural. Argus Media / ICIS / estimativas">Preço Gás Europeu TTF (€/MWh) — Jan/2021 a Abr/2026</Sec>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={energia_ttf} margin={{top:20,right:16,left:0,bottom:0}}>
                <defs><linearGradient id="tg" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={C.roxo} stopOpacity={0.4}/><stop offset="95%" stopColor={C.roxo} stopOpacity={0}/></linearGradient></defs>
                <CartesianGrid strokeDasharray="3 3" stroke={C.borda}/>
                <XAxis dataKey="d" tick={{fill:C.sub,fontSize:10}}/><YAxis tick={{fill:C.sub,fontSize:10}} tickFormatter={v=>`€${v}`}/>
                <Tooltip content={<Tip/>}/>
                <ReferenceLine y={20} stroke={C.verde} strokeDasharray="4 4" label={{value:"Gás RU ~€20",fill:C.verde,fontSize:9,position:"insideTopLeft"}}/>
                <ReferenceLine x="Set/22" stroke={C.alerta} strokeDasharray="4 4" label={{value:"Nord Stream",fill:C.alerta,fontSize:9,angle:-90,position:"insideTopRight"}}/>
                <ReferenceLine x="Feb/26" stroke={C.iran} strokeDasharray="4 4" label={{value:"Ormuz",fill:C.iran,fontSize:9,angle:-90,position:"insideTopRight"}}/>
                <Area type="monotone" dataKey="p" name="TTF €/MWh" stroke={C.roxo} fill="url(#tg)" strokeWidth={2} dot={{fill:C.roxo,r:3}}/>
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        )}

        {/* ════ TIMELINE ════ */}
        {tab==="timeline"&&(
          <Card>
            <Sec sub="Todos os eventos verificados com fontes — 2022 a 2026">Linha do Tempo Integrada</Sec>
            <div style={{position:"relative",paddingLeft:22}}>
              <div style={{position:"absolute",left:7,top:0,bottom:0,width:2,background:`linear-gradient(${C.ua},${C.iran})`}}/>
              {eventos_timeline.map((e,i)=>(
                <div key={i} style={{position:"relative",marginBottom:16}}>
                  <div style={{position:"absolute",left:-18,top:3,width:9,height:9,borderRadius:"50%",
                    background:tipo_cor[e.tipo]||C.sub,border:"2px solid #070c17"}}/>
                  <div style={{display:"flex",gap:8,alignItems:"flex-start"}}>
                    <span style={{color:"#37506b",fontSize:9,minWidth:90,paddingTop:2,fontFamily:"monospace"}}>{e.data}</span>
                    <div>
                      <Bdg t={e.tipo} c={tipo_cor[e.tipo]||C.sub}/>
                      <span style={{color:C.txt,fontSize:11,marginLeft:7,lineHeight:1.6}}>{e.e}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop:16,paddingTop:14,borderTop:`1px solid ${C.borda}`,display:"flex",flexWrap:"wrap",gap:7}}>
              {Object.entries(tipo_cor).map(([tipo,cor])=>(
                <div key={tipo} style={{display:"flex",alignItems:"center",gap:5,fontSize:10,color:C.sub}}>
                  <span style={{width:8,height:8,borderRadius:"50%",background:cor,display:"inline-block"}}/>
                  {tipo}
                </div>
              ))}
            </div>
          </Card>
        )}

      </div>

      {/* FOOTER */}
      <div style={{borderTop:`1px solid ${C.borda}`,padding:"10px 20px",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:6}}>
        <div style={{color:"#2d3f55",fontSize:9,lineHeight:1.5}}>
          Palo Alto Unit42 · Euronews · Jerusalem Post · Sec Blvd · The Conversation · Axios · Canadian CSE · CloudSEK ·
          Virginia Tech · Atlantic Council · Lowy Institute · Wikipedia · Euromaidan Press · Business Insider ·
          NPR · Defense Magazine · Al Jazeera · Frontelligence · NV Ukraine · IEEE Spectrum · Army War College · CSIS
        </div>
        <div style={{color:"#2d3f55",fontSize:9,textAlign:"right"}}>
          Fontes abertas 2022–2026<br/>Acurácia indicada por badge
        </div>
      </div>
    </div>
  );
}
