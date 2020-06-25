<script type="text/javascript">
(function($) {
    /**
     * Collapse Divi mobile menu submenus.
     *
     * Works for both the Menu and the Fullwidth Menu modules.
     * The parent item links can be either disabled or clickable.
     * 
     * @site  https://www.divicio.us/
     *
     * @param  bool  parentClickable    Pass true to keep the parent menu item links clickable. Default: false.
     */
    function dvcs_collapse_menu_module_submenus_on_mobile(parentClickable = false) {
      // Mobile menu
      let $menu = $('.et_pb_module .et_mobile_menu');
      // Iterate the mobile menu links
      $menu.find('a').each(function() {
      
      // Menu hamburger icon
      let $menu_icon = $(this).parents('.mobile_nav').find('.mobile_menu_bar');
      // Remove click event handlers from the link
      $(this).off('click');
      // If the menu item DOESN'T HAVE submenus
      if( ! $(this).siblings('.sub-menu').length ) {
        // Close the mobile menu on link click
        $(this).on('click', (e) => $menu_icon.trigger('click'));
      } else {
        // If parent items links are DISABLED
        if( ! parentClickable ){
          // Replace the URL with the # symbol
          $(this).attr('href', '#');
          // Open/close the submenu on link click
          $(this).on('click', (e) => toggle_visible(e, $(this).parent()));
        } else {
          // Add the "clickable" class to the parent(<li> tag)
          $(this).parent().addClass('clickable')
            // Prepend the icon to parent
            .prepend('<span class="parent_icon"></span>')
            // Open/close the submenu on icon click
            .find('.parent_icon').on('click', (e) => toggle_visible(e, $(this).parent()));
          // Link click
          $(this).on('click', function(e){
            // Toggle the submenu if the link doesn't have a URL or anchor
            if ( $(this).attr('href') === '#' ) {
              toggle_visible(e, $(this).parent());
            } else {
              // Close the mobile menu
              $menu_icon.trigger('click');
            }
          });
        }
      }
    });
    
    /**
     * Toggles the 'visible' class on passed element.
     */
    const toggle_visible = (e, elem) => {
      e.preventDefault();
      elem.toggleClass('visible');
    }
   }
    $(document).ready(function() {
    /**
     * Call the function with a delay to allow
     * the mobile menu(s) be ready first.
     * 
     * To keep parent links clickable pass true (boolean) as argument.
     */
     setTimeout(function() {
         dvcs_collapse_menu_module_submenus_on_mobile(true);
     }, 700);
   });
})(jQuery);
</script>