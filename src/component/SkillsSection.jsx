import React, { useState } from 'react'
import {cn} from '@/lib/utils'

const skills = [
          //frontend
          {name:"Next.js", level:80, category:"frontend"},
          {name:"REACT", level:90, category:"frontend"},
          {name:"Typesript", level:70, category:"frontend"},
          {name:"JavaScript", level:90, category:"frontend"},
          {name:"Tailwind CSS", level:80, category:"frontend"},
          {name:"HTML/CSS", level:100, category:"frontend"},
          
          //backend
          {name:"Node.js", level:80, category:"backend"},
          {name:"Express.js", level:70, category:"backend"},
          {name:"Firebase", level:50, category:"backend"},
          
          //Databases
          {name:"MongoDB", level:60, category:"database"},
          {name:"MySQL", level:60, category:"database"},
        
          //tools
           {name:"Git/GitHub", level:80, category:"tools"},
           {name:"VS Code", level:95, category:"tools"},
           {name:"Figma", level:60, category:"tools"},
           {name:"Spline", level:40, category:"tools"},
            
];
const categories=["all","frontend","backend","database","tools"];

const SkillsSection = () => {
const[activeCategory, setActiveCategory]=useState("all");

const filteredSkills =skills.filter((skill)=>
  activeCategory==="all"||skill.category===activeCategory
);

  return (
    <section id='skills' className='py-24 px-4 relative'>
       <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My<span className="text-primary"> skills</span>
        </h2>
        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {categories.map((category,key)=>{
            return(
              <button key={key}
                 onClick={()=>{setActiveCategory(category)}}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory===category ? "bg-primary text-primary-foreground":"bg-primary/10 text-foreground hover:bg-primary/40"
              )}
           
              >
                {category}
              </button>
            )
          })}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filteredSkills.map((skill,key)=>{
          return(
          <div key={key} className='bg-card p-6 rounded-lg shadow-xs card-hover'>
            <div className='text-left mb-4'>
              <h3 className='font-semibold text-lg'>{skill.name}</h3>
            </div>
            <div className='w-full bg-secondary/50 h-2 rounded-full overflow-hidden'>
           <div className='bg-primary rounded-full h-2 origin-left animation-[grow_1.5s_ease-out]'
           style={{width:skill.level+"%"}} />
            </div>
            <div className='text-right mt-1'>
            <span className='text-sm text-muted-foreground'>{skill.level}%</span>
            </div>
          </div>)
        })}

      </div>

    </section>
  )
}

export default SkillsSection
