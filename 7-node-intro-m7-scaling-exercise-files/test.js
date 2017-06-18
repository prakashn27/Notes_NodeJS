// redirect to a new page
/**
 * Created by prakashn on 17/06/2017.
 */

window.location.href = 'https://egov.uscis.gov/casestatus/landing.do';


setInterval(() => {
    "use strict";
    document.getElementById("receipt_number").value = "EAC1714554395";
    document.getElementsByName("initCaseSearch")[0].click();
}, 2000);
