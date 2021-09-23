<template lang="">
 	<!-- 컨텐츠 영역 -->
	<div id="contentWrap">
		<div id="topVisualWrap">
			<div class="topVisual">
				<p class="tit01">고객 중심 xx서비스 제공을 위한</p>
				<p class="tit02">인공지능 클라우드 XXX 플랫폼 <span></span></p>
			</div>
		</div>

		<!-- 컨텐츠영역 -->
		<div id="Content">
			<h2>
				<span>회원 기능</span>
				<span><b>로그인</b></span>
			</h2>			

			<div class="ListTbWrap mt-20">
				<table class="tList">
					<caption>회원가입폼</caption>
					<colgroup>
						<col style="width:15%">
						<col>					
					</colgroup>
					<tbody>
					<tr>
						<td class="PalignL">아이디</td>
						<td class="PalignL">
                            <input type="text" id="inp_id"  v-model="userInfo.username" class="regi" placeholder="abc@abc.com" > 
                         </td> 
					</tr>
                    <tr>
						<td class="PalignL"> 비밀번호 </td>
						<td class="PalignL">
                            <input type="password" id="inp_pw" v-model="userInfo.password" class="pw" >
                        </td>
					</tr>
                    <tr>
                        <td>  <button @click="doLogin()">로그인</button>  </td>
                    </tr>
					</tbody>
				</table>
			</div>
            
		</div><!-- //Content -->        
	</div><!-- //contentWrap -->
</template>
<script>


export default {
    data() {
		return {
			userInfo :{
				username : '',
				password : ''
			}

			
		}
	},
	methods: {
        // 일단 나오는지 확인
			doLogin(){
				this.$actions.dispatch('login',{
					userInfo : this.userInfo
				})
			}





			

			}		
            

}


</script>
<style lang="">
    
</style>