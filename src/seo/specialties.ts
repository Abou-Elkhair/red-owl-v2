// Individual scopes from the mechanical services page, with portfolio filters for each trade.
export const specialties = [
  {id:'fire-protection', discipline:'fire', title:{ar:'تنفيذ أنظمة مكافحة الحريق وغرف الطلمبات',en:'Fire protection systems and fire pump rooms'},
    shortDesc:{ar:'تركيب شبكات الرشاشات والإطفاء بالغاز وطلمبات الحريق، مع أمثلة من مشاريع red-owl.',en:'Sprinkler and gas suppression systems and fire pump installations, with examples from the Red Owl portfolio.'}},
  {id:'hvac', discipline:'hvac', title:{ar:'تنفيذ التكييف المركزي والتهوية ومجاري الهواء',en:'HVAC, chilled water and ductwork installation'},
    shortDesc:{ar:'تنفيذ شبكات المياه المثلجة ومجاري الهواء المعزولة وأنظمة التهوية وسحب الدخان.',en:'Chilled-water networks, insulated ductwork, ventilation and smoke extraction installations.'}},
  {id:'plumbing', discipline:'plumbing', title:{ar:'تنفيذ شبكات السباكة والتغذية والصرف الصحي',en:'Plumbing, water supply and drainage installation'},
    shortDesc:{ar:'تنفيذ شبكات تغذية المياه والصرف الصحي وغرف طلمبات المياه والرفع للمباني.',en:'Building water supply, drainage networks and water pump installations.'}},
] as const;
