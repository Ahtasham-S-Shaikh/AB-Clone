import React from 'react';
import Script from 'next/script';


const Analytics = () => {
    return (
        <>
            {/* Google tag (gtag.js) - Opening */}
            <Script async src={process.env.ADOBE_URL}></Script>
           
            <Script id="adobe-analytics" >
            {`
            !function(e,a,n,t){
            var i=e.head;if(i){
                if (a) return;
                var o=e.createElement("style");
                o.id="alloy-prehiding",o.innerText=n,i.appendChild(o),setTimeout(function(){o.parentNode&&o.parentNode.removeChild(o)},t)}}
                (document, document.location.href.indexOf("adobe_authoring_enabled") !== -1, ".personalization-container { opacity: 0 !important }", 3000);
                `}
            </Script>
       
            

            

           
        </>
    )
}

export default Analytics