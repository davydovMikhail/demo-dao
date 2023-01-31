(function(){var t={5398:function(t,e,a){"use strict";var s=a(6369),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[t.IS_CONNECTED?e("div",[e("router-view")],1):e("div",{staticClass:"mx-auto",staticStyle:{"margin-top":"15px"}},[e("button",{staticClass:"btn btn-warning btn-lg",attrs:{type:"button"},on:{click:t.CONNECT_METAMASK}},[t._v("Connect Wallet")])]),e("Window"),t.LOADER?e("Loader"):t._e()],1)},i=[],r=a(3822),o=function(){var t=this;t._self._c;return t._m(0)},l=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"preloader"},[e("div",{staticClass:"preloader__loader"})])}],c=a(1001),u={},p=(0,c.Z)(u,o,l,!1,null,"1434e8d6",null),m=p.exports,d=function(){var t=this,e=t._self._c;return t.MESSAGE?e("div",{staticClass:"premodal"},[e("div",{staticClass:"modal-dialog dialog"},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header-1"},[e("h5",{staticClass:"modal-title"},[t._v("Message")]),e("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Закрыть"},on:{click:function(e){return t.SET_MESSAGE("")}}},[e("i",{staticClass:"ti-close"})])]),e("div",{staticClass:"modal-body"},[e("p",[t._v(t._s(t.MESSAGE))])])])])]):t._e()},y=[],h={computed:{...(0,r.Se)(["MESSAGE"])},methods:{...(0,r.OI)(["SET_MESSAGE"])}},b=h,f=(0,c.Z)(b,d,y,!1,null,"111537b2",null),v=f.exports,_={name:"App",components:{Loader:m,Window:v},computed:{...(0,r.Se)(["IS_CONNECTED","LOADER","ORACLE_PROPOSALS"])},methods:{...(0,r.nv)(["CONNECT_METAMASK"])}},g=_,C=(0,c.Z)(g,n,i,!1,null,null,null),T=C.exports,S=a(2631),O=function(){var t=this,e=t._self._c;return e("div",{staticClass:"image-container set-full-height",staticStyle:{"background-color":"#EAF4F4"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-8 col-sm-offset-2"},[e("div",{staticClass:"wizard-container"},[e("div",{staticClass:"card wizard-card",attrs:{"data-color":"azure",id:"wizard"}},[e("form",{attrs:{action:"",method:""}},[t._m(0),e("div",{staticClass:"wizard-navigation"},[e("div",{staticClass:"progress-with-circle"},[e("div",{staticClass:"progress-bar",style:t.progressByPercent,attrs:{role:"progressbar","aria-valuenow":"1","aria-valuemin":"1","aria-valuemax":"3"}})]),e("ul",{staticClass:"nav nav-pills"},[e("li",{staticClass:"active",staticStyle:{width:"33.3333%"}},[e("a",{on:{click:function(e){return t.setStep(1)}}},[t._m(1),t._v(" Oracle Label ")])]),e("li",{class:{active:t.step>1},staticStyle:{width:"33.3333%"}},[e("a",{on:{click:function(e){return t.setStep(2)}}},[t._m(2),t._v(" Add Metrics ")])]),e("li",{class:{active:t.step>2},staticStyle:{width:"33.3333%"}},[e("a",{on:{click:function(e){return t.setStep(3)}}},[t._m(3),t._v(" Metric Labels ")])])])]),e("div",{staticClass:"tab-content"},[e("div",{staticClass:"tab-pane",class:{active:1===t.step},attrs:{id:"details"}},[e("div",{staticClass:"row"},[t._m(4),e("div",{staticClass:"col-sm-10 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("label",[t._v('Enter the oracle label and click "Set Oracle Label"')]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oracleLabel,expression:"oracleLabel"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"e.g Silicon Valley"},domProps:{value:t.oracleLabel},on:{input:function(e){e.target.composing||(t.oracleLabel=e.target.value)}}})])]),t.currentOracleLabel?e("div",{staticClass:"col-sm-10 col-sm-offset-1"},[e("h5",{staticClass:"info-text"},[t._v('The current label of your oracle is "'+t._s(t.currentOracleLabel)+'", you can install a new label. If you are satisfied with the current one, go to the "Voiting" tab')])]):t._e()])]),e("div",{staticClass:"tab-pane",class:{active:2===t.step}},[e("div",{staticClass:"row"},[t._m(5),t._m(6),t._m(7),t._l(t.metrics,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"col-sm-5 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Metric Name"},domProps:{value:t.metrics[s].name},on:{change:function(e){return t.onChangeName(e,s)}}})])]),e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("select",{staticClass:"form-control",on:{change:function(e){return t.onChangeType(e,s)}}},[e("option",{attrs:{value:"1"}},[t._v("Uint")]),e("option",{attrs:{value:"2"}},[t._v("Int")]),e("option",{attrs:{value:"3"}},[t._v("FloatUint")]),e("option",{attrs:{value:"4"}},[t._v("FloatInt")]),e("option",{attrs:{value:"5"}},[t._v("Address")]),e("option",{attrs:{value:"6"}},[t._v("Bool")]),e("option",{attrs:{value:"7"}},[t._v("String")]),e("option",{attrs:{value:"8"}},[t._v("Date")]),e("option",{attrs:{value:"9"}},[t._v("Bytes32")]),e("option",{attrs:{value:"10"}},[t._v("KYC")])])])])])})),t.metrics.length>1?e("button",{staticClass:"btn btn-primary btn-wd",staticStyle:{"margin-right":"10px"},attrs:{type:"button"},on:{click:function(e){return t.handleRemoveMetric()}}},[e("i",{staticClass:"ti-trash"}),t._v(" Remove Metric")]):t._e(),e("button",{staticClass:"btn btn-next btn-fill btn-primary btn-wd",attrs:{type:"button"},on:{click:function(e){return t.handleAddMetric()}}},[e("i",{staticClass:"ti-plus"}),t._v(" Add Metric")]),e("div",{staticClass:"col-sm-10 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Description")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{placeholder:"",rows:"2"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),e("div",{staticClass:"col-sm-12"},[t.currentOracleVotings.length?e("div",{staticClass:"form-group"},[e("h5",{staticClass:"info-text"},[t._v("Your votes:")]),t._m(8),t._m(9),t._m(10),t._m(11),t._l(t.currentOracleVotings,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control",attrs:{type:"text"}},[t._v(t._s(a.name))])])]),e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control",attrs:{type:"text"}},[t._v(t._s(t.getType(a.metricType)))])])]),e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control",attrs:{type:"text"}},[t._v(t._s(t.getStatus(a.endTime)))])])]),e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control",attrs:{type:"text"}},[t._v(t._s(a.support))])])])])}))],2):t._e()])],2)]),e("div",{staticClass:"tab-pane",class:{active:3===t.step},attrs:{id:"description"}},[e("div",{staticClass:"row"},[t.currentNamesAndLabels.length?e("h5",{staticClass:"info-text col-sm-10 col-sm-offset-1"},[t._v("Metrics that you can change and their labels, you can set a label or change it to a new one")]):e("h5",{staticClass:"info-text col-sm-10 col-sm-offset-1"},[t._v("Wait until the community approves your metrics")]),t.currentNamesAndLabels.length?e("div",[t._m(12),t._m(13)]):t._e(),t._l(t.currentNamesAndLabels,(function(a,s){return e("div",{key:s},[e("div",{staticClass:"col-sm-5 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"form-control",attrs:{type:"text"}},[t._v(t._s(a.name))])])]),e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1",placeholder:"Metric Label"},domProps:{value:t.currentNamesAndLabels[s].label},on:{change:function(e){return t.onChangeLabelForSet(e,s)}}})])])])}))],2)])]),e("div",{staticClass:"wizard-footer"},[e("div",{staticClass:"pull-right"},[1===t.step?e("input",{staticClass:"btn btn-next btn-fill btn-primary btn-wd",attrs:{type:"button",name:"next",value:"Set Oracle Label"},on:{click:function(e){return t.handleSetLabel()}}}):t._e(),2===t.step?e("input",{staticClass:"btn btn-next btn-fill btn-primary btn-wd",attrs:{type:"button",name:"next",value:"Become Oracle"},on:{click:function(e){return t.handleBecomeOracle()}}}):t._e(),3===t.step?e("input",{staticClass:"btn btn-next btn-fill btn-primary btn-wd",attrs:{type:"button",name:"next",value:"Save"},on:{click:function(e){return t.handleSetMetricLabels()}}}):t._e()]),e("div",{staticClass:"clearfix"})])])])])])])])])},E=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"wizard-header"},[e("h3",{staticClass:"wizard-title"},[t._v("Become an oracle in three simple steps")]),e("p",{staticClass:"category"},[t._v("Specify the labels and pass the vote")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-circle"},[e("i",{staticClass:"ti-id-badge"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-circle"},[e("i",{staticClass:"ti-eye"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"icon-circle"},[e("i",{staticClass:"ti-list"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-12"},[e("h5",{staticClass:"info-text"},[t._v("The unique oracle label will allow users to identify you among other oracles")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-10 col-sm-offset-1"},[e("h5",{staticClass:"info-text"},[t._v('Specify the metrics and data types that you will update, then wait for the successful completion of the vote. If the vote was successful, go to the "Metric Labels" tab')])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-5 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name of Metric")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Type of Metric")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Type")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-3"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Status")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-2"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Votes")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-5 col-sm-offset-1"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name of Metrics")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"form-group"},[e("label",[t._v("Name of Labels")])])])}],A=(a(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",class:{kyc:1==t.proposal.type},staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-title"},[t._v(t._s(t.proposal.oracle))]),e("p",{staticClass:"card-text"},[t._v(t._s(t.proposal.description))])]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[t._v(t._s(t.proposal.names))]),e("li",{staticClass:"list-group-item"},[t._v(t._s(t.proposal.metricTypes))]),e("li",{staticClass:"list-group-item"},[t._v(t._s(t.endTime))]),e("li",{staticClass:"list-group-item"},[t._v(t._s(t.proposal.support))])]),e("div",{staticClass:"card-body"},[t.isVoteTime?e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.handleVoteForOracle(t.proposal.id)}}},[t._v("Vote")]):e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.handleFinishOracleVoiting(t.proposal.id)}}},[t._v("Finish")])])])}),M=[],L={created(){this.date=this.proposal.endTime},data(){return{date:""}},props:{proposal:Object},computed:{endTime(){return new Date(1e3*this.date)},isVoteTime(){return Date.now()<=1e3*this.date}},methods:{...(0,r.nv)(["SEND_DATA"]),handleVoteForOracle(t){const e={method:"voteForOracle",params:[t]};this.SEND_DATA(e)},handleFinishOracleVoiting(t){const e={method:"finishOracleVoiting",params:[t]};this.SEND_DATA(e)}}},w=L,P=(0,c.Z)(w,A,M,!1,null,"c984c892",null),N=P.exports,D=a(6477);const{ethers:R}=a(2714);function x(t){return R.utils.id(t)}const I={1:"Uint",2:"Int",3:"FloatUint",4:"FloatInt",5:"Address",6:"Bool",7:"String",8:"Date",9:"Bytes32",10:"KYC"};var k={data(){return{step:1,currentOracleLabel:"",currentOracleAddress:"",currentOracleVotings:[],metrics:[{name:"",type:"1"}],changedEls:[],currentNamesAndLabels:[],oracleLabel:"",description:""}},name:"Main",async created(){this.currentOracleAddress=await(0,D.getFirstAddress)();const t=await(0,D.fetchContractData)("getOracleInfo",[this.currentOracleAddress]);await this.GET_ORACLE_PROPOSALS();const e=this.ORACLE_PROPOSALS.filter((t=>t.oracle.toLowerCase()===this.currentOracleAddress.toLowerCase()));if(e.length)for(let a=0;a<e.length;a++){e[a].names;for(let t=0;t<e[a].names.length;t++){const s={endTime:e[a].endTime,metricType:e[a].metricTypes[t],name:e[a].names[t],support:e[a].support};this.currentOracleVotings.push(s)}}if(t[1]&&(this.step=2),this.currentOracleLabel=t[1],t[0].length){this.step=3;for(let e=0;e<t[0].length;e++){const a=x(t[0][e]),s=await(0,D.fetchContractData)("getMetricaInfo",[a]);this.currentNamesAndLabels.push({name:t[0][e],label:s.label})}}},components:{Oracle:N},computed:{...(0,r.Se)(["IS_CONNECTED","LOADER","ORACLE_PROPOSALS"]),progressByPercent(){switch(this.step){case 1:return"width: 21%;";case 2:return"width: 50%;";case 3:return"width: 79%;"}}},methods:{...(0,r.nv)(["CONNECT_METAMASK","SEND_DATA","GET_ORACLE_PROPOSALS"]),getStatus(t){const e=+new Date/1e3;return e>t?"Finished":"In Progress"},getType(t){return I[t]},handleAddMetric(){this.metrics.push({name:"",type:"1"})},handleRemoveMetric(){this.metrics.pop()},setStep(t){this.step=t},onChangeLabelForSet(t,e){this.currentNamesAndLabels[e].label=t.target.value,this.changedEls.push(e)},onChangeType(t,e){this.metrics[e].type=t.target.value},onChangeName(t,e){this.metrics[e].name=t.target.value},async handleSetLabel(){if(this.oracleLabel){const t=this.oracleLabel,e={method:"setOracleLabel",params:[t]};let a;await this.SEND_DATA(e),a=setInterval((async()=>{const e=await this.getOracleLabel();e===t&&(clearInterval(a),this.currentOracleLabel=t,this.step=2)}),2e3)}else this.$vToastify.info("Enter oracle label","Validation warning")},async getOracleLabel(){const t=await(0,D.fetchContractData)("getOracleInfo",[this.currentOracleAddress]);return t[1]},async handleBecomeOracle(){if(this.description){const t=[],e=[];if(this.metrics.forEach((function(a,s,n){n[s].name.trim()&&(t.push(a.name.trim()),e.push(a.type))})),0===t.length)this.$vToastify.info("Enter at least one name","Validation warning");else{const a={method:"becomeOracle",params:[t,e,this.description]};await this.GET_ORACLE_PROPOSALS();const s=this.ORACLE_PROPOSALS.length;let n;await this.SEND_DATA(a),n=setInterval((async()=>{await this.GET_ORACLE_PROPOSALS();const t=this.ORACLE_PROPOSALS.length;if(t>s){clearInterval(n),this.currentOracleVotings=[];const t=this.ORACLE_PROPOSALS.filter((t=>t.oracle.toLowerCase()===this.currentOracleAddress.toLowerCase()));for(let e=0;e<t.length;e++){t[e].names;for(let a=0;a<t[e].names.length;a++){const s={endTime:t[e].endTime,metricType:t[e].metricTypes[a],name:t[e].names[a],support:t[e].support};this.currentOracleVotings.push(s)}}this.metrics=[{name:"",type:"1"}]}}),2e3)}}else this.$vToastify.info("Fill description","Validation warning")},async handleSetMetricLabels(){let t=[...new Set(this.changedEls)];if(0===t.length)return void this.$vToastify.info("Make changes to save them","Validation warning");const e=this.currentNamesAndLabels[t[0]].name,a=this.currentNamesAndLabels[t[0]].label,s=x(e),n=[],i=[];for(let r=0;r<t.length;r++){const e=t[r];this.currentNamesAndLabels[e].label&&(n.push(this.currentNamesAndLabels[e].name),i.push(this.currentNamesAndLabels[e].label))}if(0===n.length)this.$vToastify.info("Change at least one name and label","Validation warning");else{const t={method:"setMetricLabels",params:[n,i]};let e;await this.SEND_DATA(t),e=setInterval((async()=>{const t=await(0,D.fetchContractData)("getMetricaInfo",[s]);if(t.label===a){clearInterval(e);const t=await(0,D.fetchContractData)("getOracleInfo",[this.currentOracleAddress]);this.currentNamesAndLabels=[];for(let e=0;e<t[0].length;e++){const a=x(t[0][e]),s=await(0,D.fetchContractData)("getMetricaInfo",[a]);this.currentNamesAndLabels.push({name:t[0][e],label:s.label})}}}),2e3)}}}},V=k,F=(0,c.Z)(V,O,E,!1,null,null,null),G=F.exports,B=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"home__inputs"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleBecomeMember}},[t._v("Become Part of Community")])]),e("button",{staticClass:"btn btn-outline-warning",staticStyle:{"margin-top":"20px"},attrs:{type:"button"},on:{click:t.GET_MEMBER_PROPOSALS}},[t._v("Update cards")]),e("div",{staticClass:"home__cards"},t._l(t.MEMBER_PROPOSALS,(function(t,a){return e("Member",{key:a,attrs:{proposal:t}})})),1)])},Z=[],z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"card",staticStyle:{width:"18rem"}},[e("div",{staticClass:"card-body"},[e("p",{staticClass:"card-title"},[t._v(t._s(t.proposal.member))])]),e("ul",{staticClass:"list-group list-group-flush"},[e("li",{staticClass:"list-group-item"},[t._v(t._s(t.endTime))]),e("li",{staticClass:"list-group-item"},[t._v(t._s(t.proposal.support))])]),e("div",{staticClass:"card-body"},[t.isVoteTime?e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.handleVoteMemberProposal(t.proposal.id)}}},[t._v("Vote")]):e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){return t.handleFinishMemberProposal(t.proposal.id)}}},[t._v("Finish")])])])},U=[],K={created(){this.date=this.proposal.endTime},data(){return{date:""}},props:{proposal:Object},computed:{endTime(){return new Date(1e3*this.date)},isVoteTime(){return Date.now()<=1e3*this.date}},methods:{...(0,r.nv)(["SEND_DATA"]),handleVoteMemberProposal(t){const e={method:"voteForMember",params:[t]};this.SEND_DATA(e)},handleFinishMemberProposal(t){const e={method:"finishMemberVoiting",params:[t]};this.SEND_DATA(e)}}},j=K,$=(0,c.Z)(j,z,U,!1,null,null,null),q=$.exports,W={async created(){await this.GET_MEMBER_PROPOSALS()},components:{Member:q},computed:{...(0,r.Se)(["IS_CONNECTED","LOADER","MEMBER_PROPOSALS"])},methods:{...(0,r.nv)(["CONNECT_METAMASK","GET_MEMBER_PROPOSALS","SEND_DATA"]),handleBecomeMember(){const t={method:"becomeMember",params:[]};this.SEND_DATA(t)}}},Y=W,H=(0,c.Z)(Y,B,Z,!1,null,"5541399c",null),Q=H.exports,X=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"home__inputs"},[e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Oracle Label")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.oracleLabel,expression:"oracleLabel"}],staticClass:"form-control",attrs:{placeholder:"Oracle Label",type:"text","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.oracleLabel},on:{input:function(e){e.target.composing||(t.oracleLabel=e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleSetLabel}},[t._v("Set Label")])])])},J=[],tt={data(){return{oracleLabel:""}},name:"OracleLabel",computed:{...(0,r.Se)(["IS_CONNECTED","LOADER"])},methods:{...(0,r.nv)(["CONNECT_METAMASK","SEND_DATA"]),handleSetLabel(){if(this.oracleLabel){const t={method:"setOracleLabel",params:[this.oracleLabel]};this.SEND_DATA(t)}else this.$vToastify.info("Fill input","Validation warning")}}},et=tt,at=(0,c.Z)(et,X,J,!1,null,"f924f444",null),st=at.exports,nt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"home__inputs"},[e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Metric Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.metricName,expression:"metricName"}],staticClass:"form-control",attrs:{placeholder:"metric1, metric2, metric3...",type:"text","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.metricName},on:{input:function(e){e.target.composing||(t.metricName=e.target.value)}}})]),e("div",{staticClass:"input-group mb-3"},[e("span",{staticClass:"input-group-text",attrs:{id:"inputGroup-sizing-default"}},[t._v("Metric Label")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.metricLabel,expression:"metricLabel"}],staticClass:"form-control",attrs:{placeholder:"label1, label2, label3...",type:"text","aria-describedby":"inputGroup-sizing-default"},domProps:{value:t.metricLabel},on:{input:function(e){e.target.composing||(t.metricLabel=e.target.value)}}})]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.handleSetLabels}},[t._v("Set Labels")])])])},it=[],rt={data(){return{metricName:"",metricLabel:""}},name:"MetricLabels",computed:{...(0,r.Se)(["IS_CONNECTED","LOADER"])},methods:{...(0,r.nv)(["CONNECT_METAMASK","GET_ORACLE_PROPOSALS","SEND_DATA"]),handleSetLabels(){if(this.metricName){let t=this.metricName.split(","),e=this.metricLabel.split(",");t.forEach((function(t,e,a){a[e]=t.trim()})),e.forEach((function(t,e,a){a[e]=t.trim()}));const a=t.filter((t=>t)),s=e.filter((t=>t));if(a.length!=s.length)this.$vToastify.info("Arrays must be the same length","Validation warning");else{const t={method:"setMetricLabels",params:[a,s]};this.SEND_DATA(t)}}else this.$vToastify.info("Enter the names of the metrics separated by commas","Validation warning")}}},ot=rt,lt=(0,c.Z)(ot,nt,it,!1,null,"33ba246f",null),ct=lt.exports;s.ZP.use(S.ZP);const ut=[{path:"/",name:"oracles",component:G},{path:"/oracle-label",name:"oracle-label",component:st},{path:"/metric-labels",name:"metric-labels",component:ct},{path:"/community",name:"community",component:Q}],pt=new S.ZP({mode:"history",base:"/demo-dao/",routes:ut});var mt=pt;s.ZP.use(r.ZP);var dt=new r.ZP.Store({state:{loader:!1,isConnected:!1,message:"",memberProposals:[],oracleProposals:[]},getters:{IS_CONNECTED:t=>t.isConnected,MESSAGE:t=>t.message,LOADER:t=>t.loader,MEMBER_PROPOSALS:t=>t.memberProposals,ORACLE_PROPOSALS:t=>t.oracleProposals},mutations:{SET_CONNECT_STATUS:(t,e)=>t.isConnected=e,SET_LOADER_STATUS:(t,e)=>t.loader=e,SET_MESSAGE:(t,e)=>t.message=e,SET_MEMBER_PROPOSALS:(t,e)=>t.memberProposals=e,SET_ORACLE_PROPOSALS:(t,e)=>t.oracleProposals=e},actions:{async CONNECT_METAMASK({commit:t}){t("SET_LOADER_STATUS",!0);const e=await(0,D.connect)();e&&t("SET_CONNECT_STATUS",!0),t("SET_LOADER_STATUS",!1)},async GET_MEMBER_PROPOSALS({commit:t}){t("SET_MEMBER_PROPOSALS",[]);const e=await(0,D.fetchContractData)("getMemberProposals",[]);let a=0;const s=e.map((t=>({endTime:t.endTime,member:t.member,support:t.support,id:a++})));t("SET_MEMBER_PROPOSALS",s)},async GET_ORACLE_PROPOSALS({commit:t}){t("SET_ORACLE_PROPOSALS",[]);const e=await(0,D.fetchContractData)("getOracleProposals",[]);let a=0;const s=e.map((t=>({names:t.metricNames,metricTypes:t.metricTypes,description:t.description,endTime:t.endTime,oracle:t.oracle,support:t.support,id:a++})));t("SET_ORACLE_PROPOSALS",s)},async SEND_DATA({commit:t},e){t("SET_LOADER_STATUS",!0),t("SET_MESSAGE","");const a=await(0,D.checkAddress)();if(a){const a=await(0,D.sendDataToContract)(e.method,e.params);a.hash?t("SET_MESSAGE",`https://goerli.etherscan.io/tx/${a.hash}`):a.error.message&&t("SET_MESSAGE",a.error.message)}else t("SET_CONNECT_STATUS",!1);t("SET_LOADER_STATUS",!1)}},modules:{}}),yt=a(461),ht=a.n(yt);s.ZP.config.productionTip=!1,s.ZP.use(ht()),new s.ZP({router:mt,store:dt,render:t=>t(T)}).$mount("#app")},425:function(t,e,a){"use strict";a.r(e),a.d(e,{abi:function(){return s}});const s=[{inputs:[{internalType:"address[]",name:"_initMembers",type:"address[]"},{internalType:"uint256",name:"_proposalDuration",type:"uint256"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"MemberProposals",outputs:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"address",name:"member",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"OracleProposals",outputs:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"string",name:"description",type:"string"},{internalType:"address",name:"oracle",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"becomeMember",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string[]",name:"_metricNames",type:"string[]"},{internalType:"enum IMaster.TypeMetric[]",name:"_metricTypes",type:"uint8[]"},{internalType:"string",name:"_description",type:"string"}],name:"becomeOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"community",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"communityMembers",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"finishMemberVoiting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"finishOracleVoiting",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getCommunityMembers",outputs:[{internalType:"address[]",name:"",type:"address[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLengthMemberProposals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getLengthOracleProposals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMemberProposals",outputs:[{components:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"address",name:"member",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],internalType:"struct IMaster.MemberProposal[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"getMetricNamesByProposalId",outputs:[{internalType:"string[]",name:"",type:"string[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getMetricaInfo",outputs:[{components:[{internalType:"address",name:"oracle",type:"address"},{internalType:"enum IMaster.TypeMetric",name:"typeMetric",type:"uint8"},{internalType:"string",name:"label",type:"string"},{internalType:"string",name:"name",type:"string"}],internalType:"struct IMaster.MetricInfo",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"_metricId",type:"bytes32"}],name:"getOracleByMetricId",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_oracle",type:"address"}],name:"getOracleInfo",outputs:[{internalType:"string[]",name:"",type:"string[]"},{internalType:"string",name:"",type:"string"},{internalType:"int256",name:"",type:"int256"},{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"getOracleProposals",outputs:[{components:[{internalType:"bytes32",name:"votingId",type:"bytes32"},{internalType:"string[]",name:"metricNames",type:"string[]"},{internalType:"enum IMaster.TypeMetric[]",name:"metricTypes",type:"uint8[]"},{internalType:"string",name:"description",type:"string"},{internalType:"address",name:"oracle",type:"address"},{internalType:"uint256",name:"endTime",type:"uint256"},{internalType:"uint256",name:"support",type:"uint256"}],internalType:"struct IMaster.OracleProposal[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[],name:"memberQuantity",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],name:"metrics",outputs:[{internalType:"address",name:"oracle",type:"address"},{internalType:"enum IMaster.TypeMetric",name:"typeMetric",type:"uint8"},{internalType:"string",name:"label",type:"string"},{internalType:"string",name:"name",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"oracles",outputs:[{internalType:"string",name:"label",type:"string"},{internalType:"int256",name:"ResultKarma",type:"int256"},{internalType:"bool",name:"ban",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"proposalDuration",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string[]",name:"_metricNames",type:"string[]"},{internalType:"string[]",name:"_metricLabels",type:"string[]"}],name:"setMetricLabels",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_oracle",type:"address"},{internalType:"enum IMaster.KarmaState",name:"_state",type:"uint8"}],name:"setOracleKarma",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_label",type:"string"}],name:"setOracleLabel",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"voteForMember",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"voteForOracle",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes32",name:"",type:"bytes32"},{internalType:"address",name:"",type:"address"}],name:"votes",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}]},6477:function(t,e,a){const{ethers:s}=a(2714),{abi:n}=a(425),i=a(7629),r=a(1832);i.config({EXPONENTIAL_AT:60});const o="0xfDDf51F081949ac4C108815EcCff56270DC36902",l="https://rpc.ankr.com/eth_goerli",c={method:"wallet_switchEthereumChain",params:[{chainId:"0x5"}]};let u,p,m;async function d(){if("undefined"===typeof window.ethereum)return console.log("Please install MetaMask"),!1;try{await ethereum.request({method:"eth_requestAccounts"}),u=new s.providers.Web3Provider(window.ethereum);const{chainId:t}=await u.getNetwork();return 5!==t&&await ethereum.request(c),!0}catch(t){return console.log(t),!1}}const y=()=>{try{const t=new r.providers.HttpProvider(l);return p=new r(t),!0}catch(t){return!1}};async function h(){const t=await ethereum.request({method:"eth_accounts"});return t.length}async function b(){const t=await ethereum.request({method:"eth_accounts"});return t[0]}async function f(){if(!m){const t=u.getSigner();m=new s.Contract(o,n,t)}}const v=async(t,e)=>{p||y();try{const a=new p.eth.Contract(n,o);return await a.methods[t].apply(this,e).call()}catch(a){return console.log(a),""}},_=async(t,e)=>{await f();try{const a=await m[t].apply(this,e);return a}catch(a){return console.log(a),a}};t.exports={connect:d,connectNode:y,checkAddress:h,fetchContractData:v,sendDataToContract:_,getFirstAddress:b}},6601:function(){}},e={};function a(s){var n=e[s];if(void 0!==n)return n.exports;var i=e[s]={id:s,loaded:!1,exports:{}};return t[s].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}a.m=t,function(){a.amdO={}}(),function(){var t=[];a.O=function(e,s,n,i){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],n=t[u][1],i=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](s[l])}))?s.splice(l--,1):(o=!1,i<r&&(r=i));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[s,n,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var s in e)a.o(e,s)&&!a.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,s){var n,i,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(n in o)a.o(o,n)&&(a.m[n]=o[n]);if(l)var u=l(a)}for(e&&e(s);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},s=self["webpackChunkdao_oracle"]=self["webpackChunkdao_oracle"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(5398)}));s=a.O(s)})();
//# sourceMappingURL=app.619b881c.js.map