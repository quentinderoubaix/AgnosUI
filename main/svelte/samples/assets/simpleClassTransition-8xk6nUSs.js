import{c as g}from"./cssTransitions-Ba1i-lah.js";import{h as a,i,j as c}from"./directive-DWoGwsxv.js";const P=p=>{const{animationPendingClasses:d,animationPendingShowClasses:r,animationPendingHideClasses:C,showClasses:h,hideClasses:w}=p;return g((s,o,S,f)=>{if(a(s,h),a(s,w),S){if(a(s,o==="show"?C:r),!f.started){f.started=!0;const n=o==="show"?w:h;i(s,n),c(s),a(s,n)}i(s,d),c(s),i(s,o==="show"?r:C)}return()=>{a(s,d),a(s,r),a(s,C),i(s,o==="show"?h:w)}})};export{P as c};