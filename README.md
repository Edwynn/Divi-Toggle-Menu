# Divi-Toggle-Menu

The Divi Menu and the Fullwidth Menu modules started gaining more popularity among Divi users since the release of the Divi Theme Builder which allows creating headers using the Divi Builder.

Both of these menu modules provide quite a decent functionality for creating menus but currently are still lacking an important feature: they do not allow collapsing the mobile menu submenus.

This may be a serious UX issue especially with the complex menus having multi-level submenus each having many items which makes the mobile menu very long.

So, in this post I provide a solution for the issue. It allows to collapse the nested items and lets you choose whether to disable the parent links or keep them clickable on mobile devices.

Works for both the Menu Module and the Fullwidth Menu Module.


# Adding JS
To implement this feature we’ll use JS and CSS. All the code is commented out properly to help you understand what it does.

First add the JS code into the  Divi Theme Options -> Integration.

# Adding Custom CSS
Then add the following CSS into Divi Theme Options -> Custom CSS field ( or into the child theme style.css file):

# Disable Parent Links
The JS script provided above allows to either disable the parent links or keep them clickable.

To disable the parent links call the dvcs_collapse_menu_module_submenus_on_mobile() function without passing any arguments (or pass false) to it. In this case clicking the parent item will only toggle the submenu.

# Keep Parent Links Clickable
However, if you need to be able to toggle the submenus but at the same time the parent links still to be clickable then pass true as the argument.

In this case the parent item link will behave normally, (it can have a link or anchor, both will work) and clicking the arrow will toggle the submenu.

But if the clickable parent item does not have neither a link nor an anchor then clicking it will simply toggle the submenu.

That’s it, hope this will be helpful. Use this hack up untill ET adds this feature to core menu modules. If you have any questions or suggestions, feel free to leave them in the comments section below.
