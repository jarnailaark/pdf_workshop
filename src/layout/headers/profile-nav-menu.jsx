import Link from "next/link";
import React from "react";
import profile_menu from "./profile-menu";

const ProfileNavMenu = () => {
  return (
    <>
      <ul>
        {profile_menu.map((menu_item, i) => (
          <li key={i}>
            <Link href={menu_item.link}>{menu_item.title}</Link>
            {menu_item.has_dropdown && (
              <ul className="submenu">
                {menu_item.sub_menus.map((sub_menu, i) => (
                  <li key={i}>
                    <div className="d-flex">
                       <Link href={sub_menu.link} className="w-100" style={{marginRight: "25px"}}>{sub_menu.title}</Link>
                       {/* <Link href={sub_menu2.link} className="w-100">{sub_menu2.title}</Link> */}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProfileNavMenu;
