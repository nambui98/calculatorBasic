(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{12:function(_,e,t){},13:function(_,e,t){},14:function(_,e,t){"use strict";t.r(e);var a=t(0),l=t(1),r=t.n(l),u=t(3),n=t.n(u),c=(t(12),t(4)),s=function(_){_&&_ instanceof Function&&t.e(3).then(t.bind(null,15)).then((function(e){var t=e.getCLS,a=e.getFID,l=e.getFCP,r=e.getLCP,u=e.getTTFB;t(_),a(_),l(_),r(_),u(_)}))};n.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(c.a,{})}),document.getElementById("root")),s()},4:function(module,__webpack_exports__,__webpack_require__){"use strict";var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__),C_Users_NAM_BUI_Desktop_profile_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(6),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__),react_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(5),react_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(react_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3__),_App_css__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(13),_App_css__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);function App(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),_useState2=Object(C_Users_NAM_BUI_Desktop_profile_calculator_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.a)(_useState,2),text=_useState2[0],setText=_useState2[1],handleChange=function handleChange(value){if("="===value&&""!==text)"0"!==text[0]||text.indexOf(".")?setText(parseFloat(eval(text))):setText(eval(text.slice(text.lastIndexOf("0")+1,text.length)));else if("="===value&&""===text)setText("");else{if(""===text&&["/","*","-","+"].includes(value))return!1;""===value?setText(""):["/","*","-","+"].includes(value)&&["/","*","-","+"].includes(text[text.length-1])?setText(text.slice(0,text.length-1)+value):setText(text+value)}},handleConvert=function(_){return _.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},list=[{key:"c",value:""},{key:"/",value:"/"},{key:"*",value:"*"},{key:"7",value:"7"},{key:"8",value:"8"},{key:"9",value:"9"},{key:"-",value:"-"},{key:"4",value:"4"},{key:"5",value:"5"},{key:"6",value:"6"},{key:"+",value:"+"},{key:"1",value:"1"},{key:"2",value:"2"},{key:"3",value:"3"},{key:"0",value:"0"},{key:"00",value:"00"},{key:".",value:"."},{key:"=",value:"="}];return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"App",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_vanilla_tilt__WEBPACK_IMPORTED_MODULE_3___default.a,{className:"container",style:null,options:{scale:2,max:25,speed:400,glare:!0,"max-glare":.2},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form",{nameName:"calc",class:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",readonly:!0,name:"txt",value:handleConvert(text),className:"value"}),list.map((function(_){var e="";return""===_.value?e="num clear":"+"===_.value?e="num plus":"="===_.value&&(e="num equal"),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:e,onClick:function(){return handleChange(_.value)},children:_.key})}))]})})})}__webpack_exports__.a=App}},[[14,1,2]]]);
//# sourceMappingURL=main.f8ee52c9.chunk.js.map