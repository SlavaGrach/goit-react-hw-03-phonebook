(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(5),o=n.n(r),s=(n(15),n(8)),i=n(3),l=n(6),u=n(7),d=n(10),b=n(9),j=n(19),m=n(4),h=n.n(m),f=n(0);var p=function(t){var e=t.name,n=t.number,a=t.onAddContact,c=t.onSetUserInfo;return Object(f.jsxs)("form",{onSubmit:a,action:"",className:h.a.input,children:[Object(f.jsxs)("label",{htmlFor:"",children:[Object(f.jsx)("p",{children:"Name"}),Object(f.jsx)("input",{onInput:c,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(f.jsxs)("label",{htmlFor:"",children:[Object(f.jsx)("p",{children:"Number"}),Object(f.jsx)("input",{onInput:c,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(f.jsx)("button",{className:h.a.submitBtn,children:"Add contact"})]})};var O=function(t){var e=t.onSetFilter,n=t.filretValue;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{children:[Object(f.jsx)("p",{children:"Filter"}),Object(f.jsx)("input",{type:"text",name:"filter",onInput:e,value:n})]})})};var x=function(t){var e=t.onDeleteContact,n=t.id,a=t.name,c=t.number;return Object(f.jsxs)("li",{children:[Object(f.jsxs)("p",{children:[a,": ",c]}),Object(f.jsx)("button",{onClick:e,id:n,children:"delete"})]})};var v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)("ul",{children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(x,{onDeleteContact:n,id:e,name:a,number:c},e)}))})};var C=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase().trim())}))},S=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",name:"",number:""},t.handleSetUserInfo=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t.handleAddContact=function(e){if(e.preventDefault(),t.state.contacts.some((function(e){return e.name===t.state.name})))return alert("".concat(t.state.name," is already in contacts")),void t.setState((function(t){return{name:"",number:""}}));var n={id:Object(j.a)(),name:t.state.name,number:t.state.number};t.setState((function(t){return{contacts:[].concat(Object(s.a)(t.contacts),[n]),name:"",number:""}}))},t.handleDeleteContacts=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.id!==e.target.id}))})},t.handleChangeFilter=function(e){t.setState(Object(i.a)({},e.target.name,e.target.value))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=C(this.state.contacts,this.state.filter);return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{name:this.state.name,number:this.state.number,onAddContact:this.handleAddContact,onSetUserInfo:this.handleSetUserInfo}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(O,{filretValue:this.state.filter,onSetFilter:this.handleChangeFilter}),Object(f.jsx)(v,{onDeleteContact:this.handleDeleteContacts,contacts:t})]})}}]),n}(a.Component);o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},4:function(t,e,n){t.exports={input:"contactForm_input__fBflk",submitBtn:"contactForm_submitBtn__1d2Wf"}}},[[17,1,2]]]);
//# sourceMappingURL=main.09604c49.chunk.js.map