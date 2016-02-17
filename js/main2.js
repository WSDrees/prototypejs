/**
 * Created by wsdrees on 2/17/16.
 */

document.observe('dom:loaded', function() {

    // Code to run when DOM is loaded goes here
    $$('ol#rambolist li').each(function(elmt) {

        elmt.observe('click', function(ev) {

            // Code to respond to each click goes here

            var listitem = ev.target;

            var aboveitems = listitem.previousSiblings();

            if (aboveitems.length > 0)

            {

                var itemtext = aboveitems[0].innerHTML;

                aboveitems[0].innerHTML = listitem.innerHTML;

                listitem.innerHTML = itemtext;

            }


        });

    });


});