import React from 'react'
import { v4 as uuidv4 } from 'uuid';



function renderItemHTML(obj) {

   return (
      <ul>
         {
            obj.map((item, index) => {
               let id = uuidv4()
               return (
                  <li key={uuidv4()}>
                     <a href={item.url} className="title_item">{item.title}</a>
                     {
                        item.childs.length === 0 ? "" : <>
                           <input style={{ display: "none" }} id={id} type='checkbox' className="toggle_list" />
                           <label className="drop_icon" htmlFor={id}></label>
                           {renderItemHTML(item.childs)}
                        </>
                     }
                  </li>
               )
            })
         }
      </ul>
   )


}
export default function SideBar(props) {
   return (
      <div>
         <div className={props.className}>
            {renderItemHTML(props.data)}
         </div>
      </div>
   )
}
