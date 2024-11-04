import Link from "next/link";
import React from "react";
import menu_data from "./menu-data";
import profile_menu from "./profile-menu";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((menu_item, i) => (
          <li key={i}>
            <Link href={menu_item.link}>{menu_item.title}</Link>
            {menu_item.has_dropdown && (
              <div className="row submenu">
                
                <ul className="col-md-6">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  
                  <li key={i}>
                    <div className="">
                       <Link href={sub_menu.link} className="w-100">{sub_menu.title}</Link>
                       {/* <Link href={sub_menu2.link} className="w-100">{sub_menu2.title}</Link> */}
                    </div>
                    

                  </li>
                  
                ))}
              </ul>
                
             
              <ul className="col-md-6">
                {menu_item.sub_menus2.map((sub_menu2, i) => (
                  
                  <li key={i}>
                    <div >
                       <Link href={sub_menu2.link} className="w-100" >{sub_menu2.title}</Link>
                       {/* <Link href={sub_menu2.link} className="w-100">{sub_menu2.title}</Link> */}
                    </div>
                    

                  </li>
                  
                ))}
              </ul>
              </div>
              
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;
