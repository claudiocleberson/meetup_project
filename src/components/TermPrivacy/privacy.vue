<template>
  <body data-spy="scroll" data-target=".navbar-collapse">
         <div class="culmn">
             <!--Home page style-->
         <nav class="navbar navbar-default bootsnav navbar-fixed">
                 <div class="container">
                   <!-- Start Atribute Navigation -->
                     <div class="attr-nav">
                         <ul>
                           <li ><a href="https://www.facebook.com/broodcastapp/"><i class="fa fa-facebook"></i></a></li>
                           <li ><a href="https://twitter.com/Broodcastapp/"><i class="fa fa-twitter"></i></a></li>
                           <li ><a href="#"><i class="fa fa-instagram"></i></a></li>
                         </ul>
                     </div>
                     <!-- End Atribute Navigation -->

                     <!-- Start Header Navigation -->
                     <div class="navbar-header text-center">
                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                             <i class="fa fa-bars"></i>
                         </button>
                         <ul class="nav navbar-brand navbar-nav navbar-center" href="/">
                             <li><a href="/" class="logo" style="border-bottom: none; font-style: bold; font-size: 22px;" alt="">{{$t('messages.siteBrand')}}</a></li>
                         </ul>
                     </div>
                     <!-- End Header Navigation -->

                     <!-- navbar menu -->
                     <div class="collapse navbar-collapse" id="navbar-menu">
                         <ul class="nav navbar-nav navbar-center">
                           <router-link to="/" tag="li"><a>{{$t('messages.home')}}</a></router-link>
                           <router-link to="/privacy" tag="li" ><a>{{$t('messages.privacyPolicy')}}</a></router-link>
                           <router-link to="/term" tag="li"><a>{{$t('messages.termOfUse')}}</a></router-link>
                         </ul>
                     </div><!-- /.navbar-collapse -->
                 </div>
             </nav>

             <!--Page Content-->
             <div class="container roomy-50">
               <div class="row">
                 <div class="roomy-100">
                   <div id="pt" v-if="computed == 'pt-BR'">
                       <div>
                         <p class="font_8" style="font-size: 18px; text-align: center;"><span style="font-size: 18px;"><span style="font-family: open sans,sans-serif;">POL&Iacute;TICA DE PRIVACIDADE</span></span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Broodcast,&nbsp;Inc.&nbsp;&eacute;&nbsp;uma&nbsp;empresa&nbsp;estabelecida&nbsp;em&nbsp;Delaware,&nbsp;USA,&nbsp;com&nbsp;sede&nbsp;na&nbsp;Calif&oacute;rnia.&nbsp;(Broodcast).&nbsp;Esta&nbsp;Pol&iacute;tica&nbsp;de&nbsp;Privacidade&nbsp;rege&nbsp;o&nbsp;uso&nbsp;do&nbsp;site&nbsp;Broodcast&nbsp;e&nbsp;aplica&ccedil;&otilde;es&nbsp;m&oacute;veis.&nbsp;Ao&nbsp;usar&nbsp;ou&nbsp;acessar&nbsp;site&nbsp;Broodcast&nbsp;ou&nbsp;aplica&ccedil;&otilde;es&nbsp;m&oacute;veis,&nbsp;voc&ecirc;&nbsp;concorda&nbsp;em&nbsp;ficar&nbsp;vinculado&nbsp;aos&nbsp;termos&nbsp;dentro&nbsp;desta&nbsp;Pol&iacute;tica&nbsp;de&nbsp;Privacidade&nbsp;e&nbsp;os&nbsp;Termos&nbsp;de&nbsp;Uso.&nbsp;Esta&nbsp;pol&iacute;tica&nbsp;pode&nbsp;referir-se&nbsp;a&nbsp;usu&aacute;rios&nbsp;como&nbsp;"usu&aacute;rio"&nbsp;"voc&ecirc;"&nbsp;ou&nbsp;e&nbsp;pode&nbsp;se&nbsp;referir&nbsp;a&nbsp;Broodcast&nbsp;como&nbsp;"n&oacute;s",&nbsp;"n&oacute;s"&nbsp;ou&nbsp;"nosso".&nbsp;Se&nbsp;voc&ecirc;&nbsp;n&atilde;o&nbsp;concordar&nbsp;com&nbsp;os&nbsp;termos&nbsp;dentro&nbsp;desta&nbsp;pol&iacute;tica&nbsp;de&nbsp;privacidade&nbsp;e&nbsp;os&nbsp;correspondentes&nbsp;<span style="text-decoration: underline;"><a>Termos&nbsp;de&nbsp;Uso</a></span>.&nbsp;&nbsp;Favor&nbsp;n&atilde;o&nbsp;acessar&nbsp;ou&nbsp;utilizar&nbsp;o&nbsp;site&nbsp;Broodcast&nbsp;ou&nbsp;aplica&ccedil;&otilde;es&nbsp;m&oacute;veis.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">INFORMA&Ccedil;&Otilde;ES&nbsp;PESSOAIS&nbsp;ARMAZENADAS&nbsp;POR&nbsp;BROODCAST</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">A&nbsp;fim&nbsp;de&nbsp;realizar&nbsp;os&nbsp;servi&ccedil;os&nbsp;da&nbsp;Broodcast&nbsp;e&nbsp;proporcionar&nbsp;uma&nbsp;grande&nbsp;experi&ecirc;ncia&nbsp;do&nbsp;usu&aacute;rio,&nbsp;vamos&nbsp;coletar&nbsp;e&nbsp;armazenar&nbsp;as&nbsp;seguintes&nbsp;informa&ccedil;&otilde;es&nbsp;sobre&nbsp;voc&ecirc;:</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">1.&nbsp;Nome&nbsp;e&nbsp;sobrenome</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">2.&nbsp;Imagem&nbsp;de&nbsp;Perfil</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">3.&nbsp;C&oacute;digo&nbsp;Postal&nbsp;(opcional)</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">4.&nbsp;seu&nbsp;sexo&nbsp;(opcional)</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">5.&nbsp;O&nbsp;seu&nbsp;n&uacute;mero&nbsp;de&nbsp;telem&oacute;vel&nbsp;(opcional)</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">6.&nbsp;Conte&uacute;do&nbsp;que&nbsp;for&nbsp;postado&nbsp;publicamente&nbsp;ou&nbsp;em&nbsp;privado&nbsp;na&nbsp;sua&nbsp;conta&nbsp;Broodcast</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">7.&nbsp;Pesquisas&nbsp;conclu&iacute;das&nbsp;atrav&eacute;s&nbsp;do&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;ou&nbsp;site</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">8.&nbsp;Configura&ccedil;&otilde;es&nbsp;de&nbsp;Prefer&ecirc;ncia</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">9.&nbsp;Informa&ccedil;&otilde;es&nbsp;do&nbsp;dispositivo&nbsp;M&oacute;vel&nbsp;e&nbsp;identifica&ccedil;&atilde;o</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">10.&nbsp;Informa&ccedil;&otilde;es&nbsp;de&nbsp;localiza&ccedil;&atilde;o&nbsp;do&nbsp;dispositivo&nbsp;m&oacute;vel.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">11.&nbsp;Informa&ccedil;&otilde;es&nbsp;de&nbsp;perfil&nbsp;de&nbsp;sites&nbsp;de&nbsp;terceiros&nbsp;&nbsp;e&nbsp;Media&nbsp;social.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">12.&nbsp;informa&ccedil;&atilde;o&nbsp;armazenada&nbsp;ou&nbsp;arquivos&nbsp;ou&nbsp;conservados&nbsp;em&nbsp;aplicativo&nbsp;m&oacute;vel.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">13.&nbsp;Liga&ccedil;&otilde;es&nbsp;para&nbsp;outros&nbsp;usu&aacute;rios&nbsp;no&nbsp;aplicativo&nbsp;m&oacute;vel.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">14.&nbsp;mensagens&nbsp;enviadas&nbsp;para&nbsp;usu&aacute;rios&nbsp;no&nbsp;aplicativo&nbsp;m&oacute;vel.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">15.&nbsp;Seu&nbsp;endere&ccedil;o&nbsp;de&nbsp;email</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">16.&nbsp;Quaisquer&nbsp;e-mails&nbsp;que&nbsp;voc&ecirc;&nbsp;envia&nbsp;para&nbsp;Broodcast</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">17.&nbsp;Endere&ccedil;o&nbsp;IP</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">18.&nbsp;Nome&nbsp;de&nbsp;Dom&iacute;nio</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">19.&nbsp;Tempos&nbsp;de&nbsp;acesso&nbsp;ao&nbsp;site&nbsp;ou&nbsp;aplicativo&nbsp;m&oacute;vel</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">20.&nbsp;Site&nbsp;que&nbsp;Referido&nbsp;Broodcast</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">21.&nbsp;O&nbsp;tipo&nbsp;de&nbsp;sistema&nbsp;operacional</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">22.&nbsp;Informa&ccedil;&atilde;o&nbsp;de&nbsp;pagamento,&nbsp;incluindo&nbsp;cart&otilde;es&nbsp;de&nbsp;cr&eacute;dito&nbsp;para&nbsp;Servi&ccedil;os&nbsp;Pagos,&nbsp;N&uacute;mero&nbsp;do&nbsp;cart&atilde;o&nbsp;de&nbsp;d&eacute;bito&nbsp;ou&nbsp;cr&eacute;dito,&nbsp;Informa&ccedil;&otilde;es&nbsp;de&nbsp;conta&nbsp;e&nbsp;autentica&ccedil;&atilde;o,&nbsp;Faturamento,&nbsp;Transporte&nbsp;e&nbsp;detalhes&nbsp;de&nbsp;contato</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Pode&nbsp;n&atilde;o&nbsp;ser&nbsp;facilmente&nbsp;percept&iacute;vel&nbsp;para&nbsp;voc&ecirc;&nbsp;quando&nbsp;esses&nbsp;dados&nbsp;est&atilde;o&nbsp;sendo&nbsp;coletados.&nbsp;Por&nbsp;exemplo,&nbsp;quando&nbsp;voc&ecirc;&nbsp;vem&nbsp;para&nbsp;o&nbsp;nosso&nbsp;site,&nbsp;o&nbsp;seu&nbsp;endere&ccedil;o&nbsp;de&nbsp;IP&nbsp;&eacute;&nbsp;recolhido&nbsp;para&nbsp;que&nbsp;possamos&nbsp;saber&nbsp;para&nbsp;onde&nbsp;enviar&nbsp;as&nbsp;informa&ccedil;&otilde;es&nbsp;que&nbsp;voc&ecirc;&nbsp;est&aacute;&nbsp;solicitando.&nbsp;Um&nbsp;endere&ccedil;o&nbsp;IP&nbsp;&eacute;&nbsp;um&nbsp;n&uacute;mero&nbsp;que&nbsp;&eacute;&nbsp;utilizado&nbsp;pelos&nbsp;computadores&nbsp;na&nbsp;rede&nbsp;para&nbsp;identificar&nbsp;seu&nbsp;computador&nbsp;ou&nbsp;dispositivo&nbsp;m&oacute;vel,&nbsp;cada&nbsp;vez&nbsp;que&nbsp;voc&ecirc;&nbsp;efetuar&nbsp;logon&nbsp;no&nbsp;Internet.&nbsp;Da&nbsp;mesma&nbsp;forma,&nbsp;Broodcast&nbsp;ou&nbsp;servi&ccedil;os&nbsp;de&nbsp;terceiros&nbsp;podem&nbsp;colocar&nbsp;cookies&nbsp;ou&nbsp;usar&nbsp;web&nbsp;beacons,&nbsp;que&nbsp;podem&nbsp;ser&nbsp;usados&nbsp;para&nbsp;identificar&nbsp;algumas&nbsp;de&nbsp;suas&nbsp;prefer&ecirc;ncias.&nbsp;Um&nbsp;"cookie"&nbsp;&eacute;&nbsp;um&nbsp;pequeno&nbsp;arquivo&nbsp;ou&nbsp;dispositivo&nbsp;de&nbsp;manuten&ccedil;&atilde;o&nbsp;de&nbsp;registros&nbsp;que&nbsp;os&nbsp;sites&nbsp;costumam&nbsp;armazenar&nbsp;no&nbsp;computador&nbsp;ou&nbsp;dispositivo&nbsp;m&oacute;vel&nbsp;de&nbsp;um&nbsp;usu&aacute;rio.&nbsp;(Voc&ecirc;&nbsp;pode&nbsp;desativar&nbsp;os&nbsp;cookies&nbsp;ou&nbsp;definir&nbsp;o&nbsp;seu&nbsp;browser&nbsp;para&nbsp;alert&aacute;-lo&nbsp;quando&nbsp;os&nbsp;cookies&nbsp;est&atilde;o&nbsp;sendo&nbsp;enviados&nbsp;para&nbsp;o&nbsp;seu&nbsp;computador&nbsp;ou&nbsp;dispositivo&nbsp;m&oacute;vel.)</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">INFORMA&Ccedil;&Otilde;ES&nbsp;DE&nbsp;LOCALIZA&Ccedil;&Atilde;O&nbsp;PRECISA,&nbsp;E&nbsp;COMO&nbsp;OPTAR&nbsp;PARA&nbsp;N&Atilde;O&nbsp;COMPARTILHAR&nbsp;LOCALIZA&Ccedil;&Atilde;O.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Os&nbsp;servi&ccedil;os&nbsp;de&nbsp;nosso&nbsp;aplicativo&nbsp;m&oacute;veis&nbsp;utilizam&nbsp;localiza&ccedil;&atilde;o&nbsp;espec&iacute;fica,&nbsp;portanto,&nbsp;a&nbsp;fim&nbsp;de&nbsp;funcionar&nbsp;corretamente,&nbsp;as&nbsp;Aplica&ccedil;&otilde;es&nbsp;M&oacute;veis&nbsp;precisa&nbsp;saber&nbsp;sua&nbsp;localiza&ccedil;&atilde;o.&nbsp;Sempre&nbsp;que&nbsp;voc&ecirc;&nbsp;abrir&nbsp;e&nbsp;usar&nbsp;/&nbsp;interagir&nbsp;com&nbsp;nossos&nbsp;aplicativos&nbsp;em&nbsp;seu&nbsp;dispositivo&nbsp;m&oacute;vel&nbsp;ou&nbsp;ir&nbsp;a&nbsp;um&nbsp;dos&nbsp;nossos&nbsp;Sites,&nbsp;utilizamos&nbsp;as&nbsp;informa&ccedil;&otilde;es&nbsp;de&nbsp;localiza&ccedil;&atilde;o&nbsp;do&nbsp;seu&nbsp;dispositivo&nbsp;m&oacute;vel&nbsp;ou&nbsp;navegador&nbsp;(por&nbsp;exemplo,&nbsp;latitude&nbsp;e&nbsp;longitude)&nbsp;para&nbsp;ajustar&nbsp;a&nbsp;experi&ecirc;ncia&nbsp;de&nbsp;aplicativos&nbsp;m&oacute;veis&nbsp;da&nbsp;sua&nbsp;localiza&ccedil;&atilde;o&nbsp;actual&nbsp;(ou&nbsp;seja,&nbsp;vamos&nbsp;mostrar-lhe&nbsp;uma&nbsp;lista&nbsp;de&nbsp;locais&nbsp;pr&oacute;ximos,&nbsp;pessoas&nbsp;e&nbsp;grupos).&nbsp;Al&eacute;m&nbsp;disso,&nbsp;o&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;usa&nbsp;a&nbsp;localiza&ccedil;&atilde;o&nbsp;do&nbsp;dispositivo&nbsp;m&oacute;vel&nbsp;em&nbsp;segundo&nbsp;plano&nbsp;"para&nbsp;fornecer&nbsp;os&nbsp;Servi&ccedil;os,&nbsp;incluindo&nbsp;o&nbsp;envio&nbsp;de&nbsp;notifica&ccedil;&otilde;es.&nbsp;Se&nbsp;voc&ecirc;&nbsp;estiver&nbsp;com&nbsp;'a&nbsp;localiza&ccedil;&atilde;o&nbsp;em&nbsp;segundo&nbsp;plano&nbsp;ativo'&nbsp;,&nbsp;o&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;ir&aacute;,&nbsp;de&nbsp;tempos&nbsp;em&nbsp;tempos,&nbsp;nos&nbsp;dizer&nbsp;sobre&nbsp;a&nbsp;localiza&ccedil;&atilde;o&nbsp;do&nbsp;seu&nbsp;dispositivo,&nbsp;mesmo&nbsp;sem&nbsp;voc&ecirc;&nbsp;n&atilde;o&nbsp;est&aacute;&nbsp;interagindo&nbsp;diretamente&nbsp;com&nbsp;o&nbsp;aplicativo.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Broodcast&nbsp;tamb&eacute;m&nbsp;tem&nbsp;duas&nbsp;configura&ccedil;&otilde;es&nbsp;diferentes&nbsp;para&nbsp;mostrar&nbsp;a&nbsp;localiza&ccedil;&atilde;o&nbsp;dos&nbsp;usu&aacute;rios&nbsp;do&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;para&nbsp;outros&nbsp;usu&aacute;rios&nbsp;da&nbsp;nossa&nbsp;plataforma.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">A&nbsp;imagem&nbsp;de&nbsp;perfil&nbsp;que&nbsp;aparece&nbsp;sobre&nbsp;o&nbsp;mapa,&nbsp;arredondado&nbsp;por&nbsp;um&nbsp;c&iacute;rculo&nbsp;que&nbsp;se&nbsp;alternam&nbsp;entre&nbsp;Verde&nbsp;/&nbsp;ON&nbsp;e&nbsp;Vermelho&nbsp;/&nbsp;OFF&nbsp;quando&nbsp;toque&nbsp;nele.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">The&nbsp;Verde&nbsp;/&nbsp;On&nbsp;indicam&nbsp;que&nbsp;outros&nbsp;usu&aacute;rios&nbsp;s&atilde;o&nbsp;capazes&nbsp;de&nbsp;ver&nbsp;a&nbsp;sua&nbsp;localiza&ccedil;&atilde;o&nbsp;exacta&nbsp;no&nbsp;mapa&nbsp;e&nbsp;interagir&nbsp;com&nbsp;voc&ecirc;.&nbsp;O&nbsp;Vermelho&nbsp;/&nbsp;OFF&nbsp;indicam&nbsp;que&nbsp;os&nbsp;usu&aacute;rios&nbsp;n&atilde;o&nbsp;ser&atilde;o&nbsp;capazes&nbsp;de&nbsp;ver&nbsp;a&nbsp;sua&nbsp;localiza&ccedil;&atilde;o&nbsp;exacta.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Tamb&eacute;m&nbsp;atrav&eacute;s&nbsp;do&nbsp;recurso&nbsp;de&nbsp;Pr&oacute;ximo,&nbsp;que&nbsp;mostra&nbsp;aos&nbsp;usu&aacute;rios&nbsp;pr&oacute;ximas&nbsp;que&nbsp;est&atilde;o&nbsp;usando&nbsp;nosso&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;sem&nbsp;revelar&nbsp;a&nbsp;localiza&ccedil;&atilde;o&nbsp;exacta.&nbsp;Essa&nbsp;caracter&iacute;stica&nbsp;permite&nbsp;que&nbsp;os&nbsp;usu&aacute;rios&nbsp;sejam&nbsp;convidados&nbsp;a&nbsp;participar&nbsp;de&nbsp;grupos,&nbsp;atender&nbsp;meetups&nbsp;ou&nbsp;ser&nbsp;contactados&nbsp;por&nbsp;outros&nbsp;usu&aacute;rios.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">INFORMA&Ccedil;OES&nbsp;PESSOAIS&nbsp;ARMAZENADAS&nbsp;POR&nbsp;TERCEIROS</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Ao&nbsp;usar&nbsp;o&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;Broodcast&nbsp;,&nbsp;voc&ecirc;&nbsp;entende&nbsp;que&nbsp;voc&ecirc;&nbsp;vai&nbsp;ser&nbsp;capaz&nbsp;de&nbsp;interagir&nbsp;com&nbsp;servi&ccedil;os&nbsp;de&nbsp;terceiros&nbsp;e&nbsp;que&nbsp;seu&nbsp;perfil&nbsp;de&nbsp;usu&aacute;rio&nbsp;tem&nbsp;recursos&nbsp;p&uacute;blicos,&nbsp;onde&nbsp;os&nbsp;usu&aacute;rios&nbsp;de&nbsp;terceiros&nbsp;podem&nbsp;receber&nbsp;informa&ccedil;&otilde;es&nbsp;pessoais&nbsp;sobre&nbsp;voc&ecirc;.&nbsp;Tenha&nbsp;cuidado&nbsp;ao&nbsp;divulgar&nbsp;qualquer&nbsp;informa&ccedil;&atilde;o&nbsp;no&nbsp;seu&nbsp;perfil&nbsp;p&uacute;blico&nbsp;ou&nbsp;diretamente&nbsp;para&nbsp;outros&nbsp;usu&aacute;rios.&nbsp;BROODCAST&nbsp;N&Atilde;O&nbsp;&Eacute;&nbsp;RESPONS&Aacute;VEL&nbsp;PELO&nbsp;USO&nbsp;DE&nbsp;OUTROS&nbsp;das&nbsp;informa&ccedil;&otilde;es&nbsp;que&nbsp;voc&ecirc;&nbsp;divulgar&nbsp;publicamente.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">N&oacute;s&nbsp;tamb&eacute;m&nbsp;podemos&nbsp;usar&nbsp;suas&nbsp;informa&ccedil;&otilde;es&nbsp;para&nbsp;contat&aacute;-lo&nbsp;sobre&nbsp;nossos&nbsp;produtos&nbsp;e&nbsp;servi&ccedil;os&nbsp;que&nbsp;possam&nbsp;ser&nbsp;de&nbsp;seu&nbsp;interesse&nbsp;pr&oacute;prio&nbsp;e&nbsp;de&nbsp;terceiros.&nbsp;Podemos&nbsp;usar&nbsp;as&nbsp;informa&ccedil;&otilde;es&nbsp;que&nbsp;coletamos&nbsp;de&nbsp;voc&ecirc;&nbsp;para&nbsp;nos&nbsp;permitir&nbsp;exibir&nbsp;an&uacute;ncios&nbsp;para&nbsp;p&uacute;blicos-alvo&nbsp;de&nbsp;nossos&nbsp;anunciantes.&nbsp;Mesmo&nbsp;que&nbsp;n&oacute;s&nbsp;n&atilde;o&nbsp;divulgamos&nbsp;suas&nbsp;informa&ccedil;&otilde;es&nbsp;pessoais&nbsp;para&nbsp;estes&nbsp;fins&nbsp;sem&nbsp;o&nbsp;seu&nbsp;consentimento,&nbsp;se&nbsp;voc&ecirc;&nbsp;clicar&nbsp;ou&nbsp;interagir&nbsp;com&nbsp;um&nbsp;an&uacute;ncio,&nbsp;o&nbsp;anunciante&nbsp;pode&nbsp;assumir&nbsp;que&nbsp;voc&ecirc;&nbsp;cumprir&nbsp;seus&nbsp;crit&eacute;rios&nbsp;alvo.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">O&nbsp;Broodcast&nbsp;n&atilde;o&nbsp;vender&nbsp;os&nbsp;dados&nbsp;a&nbsp;terceiros,&nbsp;mas&nbsp;pode&nbsp;divulgar&nbsp;informa&ccedil;&otilde;es&nbsp;sobre&nbsp;voc&ecirc;&nbsp;a&nbsp;terceiros&nbsp;para&nbsp;obter&nbsp;ajuda&nbsp;na&nbsp;melhoria&nbsp;dos&nbsp;produtos&nbsp;e&nbsp;servi&ccedil;os&nbsp;Broodcast.&nbsp;Broodcast&nbsp;tamb&eacute;m&nbsp;pode&nbsp;divulgar&nbsp;informa&ccedil;&otilde;es&nbsp;sobre&nbsp;voc&ecirc;&nbsp;a&nbsp;terceiros,&nbsp;onde&nbsp;temos&nbsp;uma&nbsp;boa&nbsp;f&eacute;&nbsp;que&nbsp;tal&nbsp;divulga&ccedil;&atilde;o&nbsp;&eacute;&nbsp;necess&aacute;ria,&nbsp;a&nbsp;fim&nbsp;de:&nbsp;(i)&nbsp;proteger,&nbsp;refor&ccedil;ar&nbsp;ou&nbsp;defender&nbsp;os&nbsp;direitos&nbsp;legais,&nbsp;privacidade,&nbsp;seguran&ccedil;a&nbsp;ou&nbsp;propriedade&nbsp;da&nbsp;Broodcast,&nbsp;o&nbsp;nosso&nbsp;afiliadas&nbsp;ou&nbsp;seus&nbsp;funcion&aacute;rios,&nbsp;agentes&nbsp;e&nbsp;contratantes&nbsp;(incluindo&nbsp;a&nbsp;aplica&ccedil;&atilde;o&nbsp;de&nbsp;nossos&nbsp;acordos&nbsp;e&nbsp;termos&nbsp;de&nbsp;uso);&nbsp;(Ii)&nbsp;proteger&nbsp;a&nbsp;seguran&ccedil;a,&nbsp;privacidade&nbsp;e&nbsp;seguran&ccedil;a&nbsp;dos&nbsp;utilizadores&nbsp;dos&nbsp;empregados&nbsp;Broodcast,&nbsp;propriet&aacute;rios,&nbsp;ou&nbsp;membros&nbsp;do&nbsp;p&uacute;blico;&nbsp;(Iii)&nbsp;proteger&nbsp;contra&nbsp;fraude&nbsp;ou&nbsp;para&nbsp;efeitos&nbsp;de&nbsp;gest&atilde;o&nbsp;de&nbsp;riscos;&nbsp;(Iv)&nbsp;cumprir&nbsp;a&nbsp;lei&nbsp;ou&nbsp;processo&nbsp;legal;&nbsp;ou&nbsp;(v)&nbsp;responder&nbsp;a&nbsp;pedidos&nbsp;de&nbsp;autoridades&nbsp;p&uacute;blicas&nbsp;e&nbsp;governamentais.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">O&nbsp;aplicativo&nbsp;m&oacute;vel&nbsp;permite&nbsp;que&nbsp;os&nbsp;usu&aacute;rios&nbsp;fa&ccedil;am&nbsp;login&nbsp;atrav&eacute;s&nbsp;de&nbsp;suas&nbsp;contas&nbsp;do&nbsp;Facebook,&nbsp;bem&nbsp;como&nbsp;para&nbsp;postar&nbsp;aviso&nbsp;de&nbsp;transa&ccedil;&otilde;es&nbsp;consumada&nbsp;em&nbsp;seus&nbsp;perfis&nbsp;no&nbsp;Facebook.&nbsp;As&nbsp;pol&iacute;ticas&nbsp;de&nbsp;privacidade&nbsp;do&nbsp;Facebook,&nbsp;incluindo&nbsp;os&nbsp;dados&nbsp;Facebook&nbsp;recolhe&nbsp;e&nbsp;os&nbsp;usos&nbsp;de&nbsp;dados,&nbsp;est&aacute;&nbsp;al&eacute;m&nbsp;do&nbsp;nosso&nbsp;controle,&nbsp;e&nbsp;n&atilde;o&nbsp;assumimos&nbsp;responsabilidade&nbsp;por&nbsp;pr&aacute;ticas&nbsp;do&nbsp;Facebook.&nbsp;Antes&nbsp;de&nbsp;enviar&nbsp;qualquer&nbsp;informa&ccedil;&atilde;o&nbsp;pessoal&nbsp;para&nbsp;Facebook,&nbsp;recomendamos&nbsp;que&nbsp;voc&ecirc;&nbsp;leia&nbsp;a&nbsp;pol&iacute;tica&nbsp;de&nbsp;privacidade&nbsp;do&nbsp;Facebook,&nbsp;que&nbsp;pode&nbsp;ser&nbsp;encontrada&nbsp;no&nbsp;seguinte&nbsp;link:&nbsp;https://www.facebook.com/policies.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">COMO&nbsp;N&Oacute;S&nbsp;COMPARTILHAMOS&nbsp;INFORMA&Ccedil;&Otilde;ES</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Referimo-nos&nbsp;a&nbsp;outros&nbsp;usu&aacute;rios&nbsp;que&nbsp;um&nbsp;determinado&nbsp;usu&aacute;rio&nbsp;se&nbsp;comunica&nbsp;ou&nbsp;compartilha&nbsp;informa&ccedil;&otilde;es&nbsp;como&nbsp;"MEUS&nbsp;CONTATOS.".</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Os&nbsp;conte&uacute;dos&nbsp;podem&nbsp;ser&nbsp;compartilhados&nbsp;entre&nbsp;dois&nbsp;usu&aacute;rios.&nbsp;Bem&nbsp;como&nbsp;entre&nbsp;grupos,&nbsp;e&nbsp;cada&nbsp;usu&aacute;rio&nbsp;pode&nbsp;compartilhar&nbsp;o&nbsp;conte&uacute;do&nbsp;individualmente.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">O&nbsp;conte&uacute;do&nbsp;pode&nbsp;ser&nbsp;publicado&nbsp;como:&nbsp;mensagens,&nbsp;coment&aacute;rios,&nbsp;"Check-ins"&nbsp;em&nbsp;um&nbsp;local,&nbsp;imagens,&nbsp;coment&aacute;rios,&nbsp;e&nbsp;meetups&nbsp;arranjados&nbsp;entre&nbsp;os&nbsp;usu&aacute;rios.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Informa&ccedil;&atilde;o&nbsp;de&nbsp;Meetups&nbsp;podem&nbsp;ser&nbsp;compartilhada&nbsp;com&nbsp;os&nbsp;propriet&aacute;rios&nbsp;ou&nbsp;operadores&nbsp;de&nbsp;perfis&nbsp;de&nbsp;empresas,&nbsp;ligado&nbsp;ao&nbsp;destino&nbsp;selecionado&nbsp;para&nbsp;o&nbsp;meetup.&nbsp;As&nbsp;informa&ccedil;&otilde;es&nbsp;compartilhadas&nbsp;podem&nbsp;ser&nbsp;a&nbsp;respeito&nbsp;de&nbsp;um&nbsp;meetup&nbsp;p&uacute;blicamente&nbsp;divulgada&nbsp;a&nbsp;todos&nbsp;os&nbsp;participantes&nbsp;e&nbsp;ao&nbsp;perfil&nbsp;da&nbsp;empresa.&nbsp;Informa&ccedil;&otilde;es&nbsp;de&nbsp;meetups&nbsp;compartilhadas&nbsp;com&nbsp;o&nbsp;perfil&nbsp;de&nbsp;empresa&nbsp;permite&nbsp;que&nbsp;a&nbsp;empresa&nbsp;se&nbsp;comunicar,&nbsp;e&nbsp;compartilhar&nbsp;informa&ccedil;&atilde;o,&nbsp;ou&nbsp;an&uacute;ncios&nbsp;personalizados&nbsp;e&nbsp;relevantes&nbsp;aos&nbsp;participantes.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Al&eacute;m&nbsp;disso,&nbsp;os&nbsp;usu&aacute;rios&nbsp;(n&atilde;o&nbsp;participantes&nbsp;do&nbsp;meetup&nbsp;)&nbsp;externos&nbsp;que&nbsp;est&atilde;o&nbsp;visualizando&nbsp;um&nbsp;perfil&nbsp;de&nbsp;empresa,&nbsp;poder&atilde;o&nbsp;ver&nbsp;a&nbsp;lista&nbsp;de&nbsp;participantes&nbsp;do&nbsp;meetup&nbsp;para&nbsp;aquele&nbsp;lugar.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">COMUNICA&Ccedil;&Atilde;O,&nbsp;COMERCIAL&nbsp;E&nbsp;N&Atilde;O&nbsp;COMERCIAL</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Ao&nbsp;fornecer&nbsp;informa&ccedil;&otilde;es&nbsp;ao&nbsp;site,&nbsp;como&nbsp;se&nbsp;inscrever&nbsp;para&nbsp;uma&nbsp;newsletter&nbsp;ou&nbsp;promo&ccedil;&atilde;o,&nbsp;voc&ecirc;&nbsp;renuncia&nbsp;a&nbsp;todos&nbsp;os&nbsp;direitos&nbsp;para&nbsp;apresentar&nbsp;queixas&nbsp;relativas&nbsp;a&nbsp;e-mail&nbsp;n&atilde;o&nbsp;solicitadas&nbsp;a&nbsp;partir&nbsp;Broodcast,&nbsp;desde&nbsp;que&nbsp;voc&ecirc;&nbsp;tenha&nbsp;concordado&nbsp;com&nbsp;essa&nbsp;comunica&ccedil;&atilde;o,&nbsp;fornecendo&nbsp;suas&nbsp;informa&ccedil;&otilde;es&nbsp;para&nbsp;Broodcast.&nbsp;No&nbsp;entanto,&nbsp;voc&ecirc;&nbsp;pode&nbsp;cancelar&nbsp;a&nbsp;assinatura&nbsp;de&nbsp;certas&nbsp;comunica&ccedil;&otilde;es&nbsp;por&nbsp;notificar&nbsp;Broodcast&nbsp;que&nbsp;j&aacute;&nbsp;n&atilde;o&nbsp;desejam&nbsp;receber&nbsp;solicita&ccedil;&otilde;es&nbsp;ou&nbsp;informa&ccedil;&otilde;es.&nbsp;Broodcast&nbsp;ir&aacute;&nbsp;remov&ecirc;-lo&nbsp;do&nbsp;banco&nbsp;de&nbsp;dados,&nbsp;onde&nbsp;voc&ecirc;&nbsp;tem&nbsp;o&nbsp;direito&nbsp;de&nbsp;pedir&nbsp;isso&nbsp;sob&nbsp;a&nbsp;Pol&iacute;tica&nbsp;de&nbsp;Privacidade,&nbsp;Termos&nbsp;de&nbsp;Uso,&nbsp;ou&nbsp;da&nbsp;lei&nbsp;aplic&aacute;vel,&nbsp;ou&nbsp;de&nbsp;onde&nbsp;Broodcast&nbsp;decide&nbsp;voluntariamente&nbsp;aceitar&nbsp;o&nbsp;pedido.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">LEI&nbsp;DE&nbsp;PROTE&Ccedil;&Atilde;O&nbsp;DE&nbsp;PRIVACIDADE&nbsp;DE&nbsp;CRIAN&Ccedil;AS</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">O&nbsp;site&nbsp;Broodcast&nbsp;e&nbsp;aplica&ccedil;&otilde;es&nbsp;m&oacute;veis&nbsp;s&atilde;o&nbsp;direcionados&nbsp;para&nbsp;adultos,&nbsp;com&nbsp;idade&nbsp;superior&nbsp;a&nbsp;18.&nbsp;Broodcast&nbsp;n&atilde;o&nbsp;recolhe&nbsp;intencionalmente&nbsp;informa&ccedil;&otilde;es&nbsp;de&nbsp;crian&ccedil;as&nbsp;com&nbsp;menos&nbsp;de&nbsp;13&nbsp;anos&nbsp;de&nbsp;idade&nbsp;ou&nbsp;ter&nbsp;quaisquer&nbsp;motivos&nbsp;razo&aacute;veis&nbsp;​​para&nbsp;acreditar&nbsp;que&nbsp;as&nbsp;pessoas&nbsp;menores&nbsp;de&nbsp;13&nbsp;anos&nbsp;est&atilde;o&nbsp;acessando&nbsp;o&nbsp;site&nbsp;ou&nbsp;fazer&nbsp;uso&nbsp;de&nbsp;Aplica&ccedil;&atilde;o&nbsp;m&oacute;vel&nbsp;da&nbsp;Broodcast.&nbsp;Se&nbsp;Broodcast&nbsp;descobre&nbsp;qualquer&nbsp;informa&ccedil;&atilde;o&nbsp;pessoal&nbsp;inadvertidamente&nbsp;coletado&nbsp;de&nbsp;uma&nbsp;pessoa&nbsp;sob&nbsp;a&nbsp;idade&nbsp;de&nbsp;13,&nbsp;que&nbsp;a&nbsp;informa&ccedil;&atilde;o&nbsp;ser&aacute;&nbsp;rapidamente&nbsp;exclu&iacute;do&nbsp;do&nbsp;seu&nbsp;'registros.&nbsp;Se&nbsp;voc&ecirc;&nbsp;acredita&nbsp;que&nbsp;Broodcast&nbsp;pode&nbsp;ter&nbsp;qualquer&nbsp;informa&ccedil;&atilde;o&nbsp;de&nbsp;uma&nbsp;pessoa&nbsp;com&nbsp;menos&nbsp;de&nbsp;13&nbsp;anos&nbsp;de&nbsp;idade,&nbsp;por&nbsp;favor&nbsp;contacte&nbsp;Broodcast&nbsp;em&nbsp;contact@broodcast.com.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">SEUS&nbsp;DIREITOS&nbsp;DE&nbsp;PRIVACIDADE&nbsp;NA&nbsp;CALIFORNIA</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Broodcast&nbsp;convida&nbsp;os&nbsp;moradores&nbsp;do&nbsp;Estado&nbsp;da&nbsp;Calif&oacute;rnia&nbsp;para&nbsp;usar&nbsp;a&nbsp;sua&nbsp;aplica&ccedil;&atilde;o&nbsp;m&oacute;vel&nbsp;e&nbsp;site,&nbsp;e&nbsp;est&aacute;&nbsp;conformidade&nbsp;com&nbsp;a&nbsp;California&nbsp;Business&nbsp;and&nbsp;Professions&nbsp;C&oacute;digo&nbsp;&sect;&sect;&nbsp;22.575-22.579.&nbsp;Se&nbsp;voc&ecirc;&nbsp;&eacute;&nbsp;um&nbsp;morador&nbsp;da&nbsp;Calif&oacute;rnia&nbsp;pode&nbsp;pedir&nbsp;determinadas&nbsp;informa&ccedil;&otilde;es&nbsp;relacionadas&nbsp;com&nbsp;a&nbsp;divulga&ccedil;&atilde;o&nbsp;de&nbsp;informa&ccedil;&otilde;es&nbsp;pessoais&nbsp;a&nbsp;terceiros&nbsp;para&nbsp;fins&nbsp;de&nbsp;marketing&nbsp;direto.&nbsp;Por&nbsp;favor,&nbsp;envie&nbsp;um&nbsp;pedido&nbsp;por&nbsp;escrito&nbsp;</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">1911&nbsp;Martin&nbsp;Luther&nbsp;Jr&nbsp;Way.&nbsp;</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Berkeley&nbsp;CA&nbsp;94704.</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">V&aacute;rias&nbsp;disposi&ccedil;&otilde;es&nbsp;em&nbsp;toda&nbsp;esta&nbsp;Privacidade&nbsp;atender&nbsp;a&nbsp;requisitos&nbsp;relativos&nbsp;Pol&iacute;tica&nbsp;dos&nbsp;estatutos&nbsp;de&nbsp;privacidade&nbsp;californiana.&nbsp;Se&nbsp;voc&ecirc;&nbsp;tiver&nbsp;alguma&nbsp;d&uacute;vida&nbsp;entre&nbsp;em&nbsp;contato&nbsp;com&nbsp;Broodcast&nbsp;pelo&nbsp;contact@broodcast.com</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">ACESSO&nbsp;DE&nbsp;USU&Aacute;RIOS&nbsp;E&nbsp;CONTROLE</span></p>
                         <p class="font_8">&nbsp;</p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Se&nbsp;voc&ecirc;&nbsp;gostaria&nbsp;de&nbsp;acessar,&nbsp;revisar,&nbsp;corrigir,&nbsp;atualizar,&nbsp;suprimir&nbsp;ou&nbsp;limitar&nbsp;o&nbsp;uso&nbsp;de&nbsp;suas&nbsp;informa&ccedil;&otilde;es&nbsp;pessoais&nbsp;que&nbsp;voc&ecirc;&nbsp;forneceu&nbsp;anteriormente&nbsp;diretamente&nbsp;para&nbsp;n&oacute;s,&nbsp;pode&nbsp;contactar-nos&nbsp;em&nbsp;contact@broodcast.com.&nbsp;Em&nbsp;seu&nbsp;pedido,&nbsp;por&nbsp;favor&nbsp;incluir&nbsp;o&nbsp;seu&nbsp;endere&ccedil;o&nbsp;de&nbsp;e-mail,&nbsp;nome,&nbsp;endere&ccedil;o&nbsp;e&nbsp;n&uacute;mero&nbsp;de&nbsp;telefone&nbsp;e&nbsp;especificar&nbsp;claramente&nbsp;quais&nbsp;informa&ccedil;&otilde;es&nbsp;voc&ecirc;&nbsp;gostaria&nbsp;de&nbsp;acessar,&nbsp;alterar,&nbsp;actualizar&nbsp;ou&nbsp;suprimir.&nbsp;Vamos&nbsp;tentar&nbsp;satisfazer&nbsp;o&nbsp;seu&nbsp;pedido,&nbsp;logo&nbsp;que&nbsp;seja&nbsp;razoavelmente&nbsp;poss&iacute;vel.</span></p>
                         <p class="font_8"><span style="font-family: open sans,sans-serif;">Reservamo-nos&nbsp;o&nbsp;direito&nbsp;de&nbsp;fazer&nbsp;altera&ccedil;&otilde;es&nbsp;a&nbsp;esta&nbsp;pol&iacute;tica&nbsp;de&nbsp;privacidade&nbsp;a&nbsp;qualquer&nbsp;momento.&nbsp;Se&nbsp;mudarmos&nbsp;nossa&nbsp;pol&iacute;tica&nbsp;de&nbsp;privacidade,&nbsp;iremos&nbsp;notific&aacute;-lo&nbsp;via&nbsp;e-mail&nbsp;enviado&nbsp;para&nbsp;o&nbsp;endere&ccedil;o&nbsp;de&nbsp;e-mail&nbsp;fornecido&nbsp;no&nbsp;momento&nbsp;da&nbsp;inscri&ccedil;&atilde;o,&nbsp;assim&nbsp;como&nbsp;publicar&nbsp;uma&nbsp;vers&atilde;o&nbsp;actualizada&nbsp;desta&nbsp;Pol&iacute;tica&nbsp;de&nbsp;Privacidade&nbsp;em&nbsp;nosso&nbsp;site&nbsp;para&nbsp;que&nbsp;voc&ecirc;&nbsp;e&nbsp;outros&nbsp;usu&aacute;rios&nbsp;estarem&nbsp;sempre&nbsp;cientes&nbsp;do&nbsp;que&nbsp;informa&ccedil;&otilde;es&nbsp;que&nbsp;recolhemos,&nbsp;como&nbsp;a&nbsp;usamos,&nbsp;e&nbsp;sob&nbsp;quais&nbsp;circunst&acirc;ncias,&nbsp;se&nbsp;houver,&nbsp;as&nbsp;divulgamos.&nbsp;As&nbsp;altera&ccedil;&otilde;es&nbsp;n&atilde;o&nbsp;ser&atilde;o&nbsp;aplicadas&nbsp;retroativamente&nbsp;e&nbsp;mudan&ccedil;as&nbsp;abordando&nbsp;novas&nbsp;fun&ccedil;&otilde;es&nbsp;para&nbsp;um&nbsp;servi&ccedil;o&nbsp;ou&nbsp;as&nbsp;altera&ccedil;&otilde;es&nbsp;feitas&nbsp;por&nbsp;raz&otilde;es&nbsp;legais&nbsp;entrar&atilde;o&nbsp;em&nbsp;vigor&nbsp;imediatamente.&nbsp;Se&nbsp;voc&ecirc;&nbsp;n&atilde;o&nbsp;concordar&nbsp;com&nbsp;os&nbsp;termos&nbsp;modificados,&nbsp;voc&ecirc;&nbsp;deve&nbsp;interromper&nbsp;o&nbsp;uso&nbsp;do&nbsp;site&nbsp;e&nbsp;aplica&ccedil;&otilde;es&nbsp;m&oacute;veis.&nbsp;Seu&nbsp;uso&nbsp;continuado&nbsp;do&nbsp;Site&nbsp;e&nbsp;Aplica&ccedil;&otilde;es&nbsp;M&oacute;veis&nbsp;ap&oacute;s&nbsp;tais&nbsp;altera&ccedil;&otilde;es&nbsp;constitui&nbsp;a&nbsp;sua&nbsp;aceita&ccedil;&atilde;o&nbsp;da&nbsp;nova&nbsp;Pol&iacute;tica&nbsp;de&nbsp;Privacidade.&nbsp;Voc&ecirc;&nbsp;tamb&eacute;m&nbsp;deve&nbsp;verificar&nbsp;de&nbsp;vez&nbsp;em&nbsp;quando&nbsp;para&nbsp;garantir&nbsp;que&nbsp;voc&ecirc;&nbsp;est&aacute;&nbsp;ciente&nbsp;de&nbsp;quaisquer&nbsp;altera&ccedil;&otilde;es.</span></p>
                       </div>
                   </div>
                   <div  id="en" v-else>
                         <div>
                           <p style="margin: 0px 0px 11px;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 19pt;">Broodcast Privacy Policy</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Welcome to the Broodcast Website.&nbsp;&nbsp;Broodcast, Inc. is a Delaware Company, based in California. (Broodcast).&nbsp; This Privacy Policy governs the use of the Broodcast Website and Mobile Applications. When using or accessing the Broodcast Website or Mobile Applications, you are agreeing to be bound to the terms within this Privacy Policy and the Terms of Use policy. This policy may refer to users as "you" or "user" and may refer to&nbsp;Broodcast&nbsp;as "us," "we," or "our."&nbsp; If you do not agree to the terms within this Privacy Policy and the corresponding Terms of Use, do not access or use the Broodcast Website or Mobile Applications.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">PERSONAL INFORMATION STORED BY BROODCAST</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">In order to carry out the services of Broodcast and to provide a great user experience, we will collect and store the following information about you:</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">1. First and Last Name</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">2. Profile Picture</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">3. Postal Code(optional)</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">4. Your Gender(optional)</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">5. Your mobile phone number(optional)</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">6.Content You Post Publicly or Privately on Your Broodcast Account</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">7. Searches Completed through the Mobile Application or Website</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">8. Preference Settings</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">9. Mobile Device Identification Information</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">10. Mobile Device Location Information</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">11. Profile Information from Third-Party Social Media Websites</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">12. Stored Information or Files Created or Stored on Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">13. Connections to Other Users on Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">14. Messages You Send to Users of Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">15. Your Email Address</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">16. Any Emails You Send to Broodcast</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">17. IP Address</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">18. Domain Name</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">19. Times of Access to Website or Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">20. Website that Referred to Broodcast</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">21. Your Operating System Type</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">22. Payment Information, Including Credit Cards for Paid Services</span></p>
                           <ul type="disc">
                           <li style="margin: 0px 0px 11px; color: #060605; line-height: 16.8pt; font-family: 'Arial',sans-serif; font-size: 11.5pt; font-style: normal; font-weight: normal;"><span lang="EN" style="margin: 0px; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">credit or debit card number</span></li>
                           <li style="margin: 0px 0px 11px; color: #060605; line-height: 16.8pt; font-family: 'Arial',sans-serif; font-size: 11.5pt; font-style: normal; font-weight: normal;"><span lang="EN" style="margin: 0px; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">account and authentication information</span></li>
                           <li style="margin: 0px 0px 11px; color: #060605; line-height: 16.8pt; font-family: 'Arial',sans-serif; font-size: 11.5pt; font-style: normal; font-weight: normal;"><span lang="EN" style="margin: 0px; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">billing, shipping and contact details</span></li>
                           </ul>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">It may not be readily apparent to you when such data is being collected. For instance, when you come to our website, your IP address is collected so that we know where to send information you are requesting. An IP address is a number that is used by computers on the network to identify your computer every time you log on to the Internet.&nbsp; Similarly, Broodcast or a third party may place cookies or use web beacons, which may be used to identify some of your preferences.&nbsp; A "cookie" is a small file or record-keeping device that websites often store on a user&rsquo;s computer. (You can disable cookies or set your browser to alert you when cookies are being sent to your computer.)</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">PRECISE LOCATION INFORMATION AND HOW TO OPT OUT</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">The Mobile Application services are location specific, therefore in order to properly work, the Mobile Applications needs to know your location. Whenever you open and use/interact with our apps on your mobile device or go to one of our Sites, we use the location information from your mobile device or browser (e.g., latitude and longitude) to tailor the Mobile Application experience to your current location (i.e., we&rsquo;ll show you a list of nearby locations, people and groups).&nbsp; Also, the Mobile Application uses your mobile device&rsquo;s &lsquo;background location&rsquo; to provide the Services, including sending you notifications.&nbsp; If you have the &lsquo;background location&rsquo; turned on, the Mobile Application will, from time to time, tell us about your device&rsquo;s location even if you are not directly interacting with the application.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Broodcast also has two different settings to show users location to other users of our platform.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">The profile picture which appears over the map, rounded by a circle which alternate between Green/ON and Red/OFF when tap on it.&nbsp; </span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">The Green/On indicate that other users are able to see your precise location on the map and interact with you. The Red/OFF indicate that users won&rsquo;t be able to see your precise location.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Also through the Nearby feature, which shows nearby users who are using our mobile APP without reveling the precise location. That feature allows users to be invited to join groups, meet ups or other users circles.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 15pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">PERSONAL INFORMATION STORED BY THIRD-PARTIES</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">When using the Broodcast Mobile Application, you understand that you will be able to interact with third-parties and that your user profile has public features, where third-party users may receive personal information about you. PLEASE BE CAREFUL WHEN DISCLOSING ANY INFORMATION ON YOUR PUBLIC PROFILE OR DIRECTLY TO OTHER USERS. BROODCAST IS NOT RESPONSIBLE FOR THE USE BY OTHERS OF THE INFORMATION YOU PUBLICLY DISCLOSE.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">We may also use your information to contact you about our own and third-party goods and services that may be of interest to you. If you do not want us to use your information in this way, please check the relevant box located on the form on which we collect your data and/or adjust your user preferences in your account profile.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">We may use the information we have collected from you to enable us to display advertisements to our advertisers&rsquo; target audiences. Even though we do not disclose your personal information for these purposes without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume that you meet its target criteria.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Broodcast does not sell you data to third-parties, but may disclose information about you to third-parties for assistance in improving the Broodcast products and services. Broodcast may also disclose information about you to third-parties where we have a good faith belief that such disclosure is necessary in order to: (i) protect, enforce, or defend the legal rights, privacy, safety, or property of Broodcast, our affiliates or their employees, agents and contractors (including enforcement of our agreements and our terms of use); (ii) protect the safety, privacy, and security of users of the Broodcast employees, owners, or members of the public; (iii) protect against fraud or for risk management purposes; (iv) comply with the law or legal process; or (v) respond to requests from public and government authorities.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">The Mobile Application allows users to login through their Facebook accounts, as well as to post notice of consummated transactions on their Facebook profiles.&nbsp; The Facebook privacy policies, including the data Facebook collects and the uses of that data, is beyond our control, and we take no responsibility for Facebook&rsquo;s practices.&nbsp; Before you submit any personal information to Facebook, we recommend that you read Facebook&rsquo;s privacy policy, which can be found at the following link: https://www.facebook.com/policies.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">HOW WE SHARE INFORMATION</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">We refer to other users which a certain user communicates or shares information to as "My Connections."</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Contents can be shared between two users. As well as among groups, and each user can share individually the content as they see fit.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Content can be posted as: messages, comments, "check ins" at a location, pictures, reviews, and meet-ups arranged among users.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Meet up information can be shared with the owners or operators of business profiles if a business profile is connected to the selected meet up destination. The information shared can&nbsp; regarding a meet up public is disclosed to all meet up attendees and the business profile. Meet up information allows the specific business to communicate, forward relevant information or tailor ads to the Attendees.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Also, external(not a meet up attendee) users who are browsing a specific business profile can see meet ups and the list of attendees for that place.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">COMMERICAL AND NON-COMMERICAL COMMUNICATION</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">By providing information to the Website, such as signing up for a newsletter or promotion, you waive all rights to file complaints concerning unsolicited email from Broodcast, since you have agreed to such communication by providing your information to Broodcast. However, you may unsubscribe from certain communications by notifying Broodcast that you no longer wish to receive solicitations or information. Broodcast will remove you from the database, where you have the right to request this under the Privacy Policy, Terms of Use, or applicable law, or where Broodcast voluntarily decides to grant the request.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">CHILDREN&rsquo;S ONLINE PRIVACY PROTECTION ACT</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">The Broodcast website and mobile application are directed to adults, over the age of 18. Broodcast does not knowingly collect information from children under 13 years of age or have any reasonable grounds for believing that persons under the age of 13 are accessing the Website or making use of Broodcast&rsquo;s Mobile Application. If Broodcast discovers any inadvertently collected Personal Information of a person under the age of 13, that information will be swiftly deleted from its&rsquo; records. If you believe that Broodcast may have any information from a person under age 13, please contact Broodcast at contact@broodcast.com.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">YOUR CALIFORNIA PRIVACY RIGHTS</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Broodcast welcomes residents of the State of California to use its Mobile app and&nbsp; Website, and complies with the California Business and Professions Code &sect;&sect; 22575-22579. If you are a California resident you may request certain information regarding our disclosure of personal information to any third parties for their direct marketing purposes. Please send a written request 1911 Martin Luther Kind Jr Way. Berkeley CA 94704.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">Various provisions throughout this Privacy Policy address requirements of the Californian privacy statutes. If you have any questions contact Broodcastat contact@broodcast.com</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 15pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 15pt;">USER ACCESS AND CONTROL</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Arial',sans-serif; font-size: 11.5pt;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">If you would like to access, review, correct, update, suppress, or otherwise limit our use of your personal information you have previously provided directly to us, you may contact us at contact@broodcast.com. In your request, please include your email address, name, address, and telephone number and specify clearly what information you would like to access, change, update, or suppress. We will try to comply with your request as soon as reasonably practicable.</span></p>
                           <p style="margin: 0px 0px 11px; line-height: 16.8pt;"><span lang="EN" style="margin: 0px; color: #060605; font-family: 'Open Sans',sans-serif; font-size: 11.5pt;">We reserve the right to make changes to this privacy policy at any time. If we change our privacy policy, we will notify you via email sent to the email address you provide at the time of registration as well as post an updated version of this Privacy Policy on our website so that you and other users are always aware of what information we collect, how we use it, and under what circumstances, if any, we disclose it. Changes will not apply retroactively and changes addressing new functions for a service or changes made for legal reasons will be effective immediately.&nbsp; If you do not agree to the modified terms, you should discontinue your use of the Website and Mobile Applications.&nbsp; Your continued use of the Website and Mobile Applications after any such changes constitutes your acceptance of the new Privacy Policy.&nbsp; You should also check back from time to time to ensure you are aware of any changes.</span></p>
                           <p style="margin: 0px 0px 11px;"><span lang="EN" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         </div>
                   </div>
                 </div>
               </div>
             </div>
             <!-- scroll up-->
             <div class="scrollup">
                 <a href="#"><i class="fa fa-chevron-up"></i></a>
             </div><!-- End off scroll up -->
             <footer id="footer" class="footer bg-black">
                 <div class="container">
                     <div class="row">
                         <div class="col-md-12">
                             <nav class="navbar navbar-default bootsnav footer-menu no-background">
                                 <div class="container">

                                     <!-- Start Atribute Navigation -->
                                     <div class="attr-nav">
                                         <ul>
                                           <li ><a href="https://www.facebook.com/broodcastapp/"><i class="fa fa-facebook"></i></a></li>
                                           <li ><a href="https://twitter.com/Broodcastapp/"><i class="fa fa-twitter"></i></a></li>
                                           <li ><a href="#"><i class="fa fa-instagram"></i></a></li>
                                         </ul>
                                     </div>
                                     <!-- End Atribute Navigation -->

                                     <!-- footr Header Navigation - Disabled -->
                                     <div class="navbar-header">
                                         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-footer">
                                            <ul>
                                              <li><a><i class="fa fa-bars" style="font-size: 20px"></i></a></li>
                                            </ul>
                                         </button>
                                         <ul class="nav navbar-brand navbar-nav navbar-center">
                                             <li><a href="/" class="logo" style="border-bottom: none; font-size: 14px;" alt="">{{$t('messages.siteBrand')}}</a></li>

                                         </ul>
                                     </div>

                                     <!-- navbar menu -->
                                     <div class="collapse navbar-collapse" id="navbar-footer">
                                         <ul class="nav navbar-nav navbar-center">
                                             <router-link to="/" tag="li"><a>{{$t('messages.home')}}</a></router-link>
                                             <router-link to="/privacy" tag="li" ><a>{{$t('messages.privacyPolicy')}}</a></router-link>
                                             <router-link to="/term" tag="li"><a>{{$t('messages.termOfUse')}}</a></router-link>
                                         </ul>
                                     </div><!-- /.navbar-collapse -->
                                     <!--Language selector -->
                                     <div class="text-center">
                                        <select v-model="$i18n.locale">
                                          <option value="en-US"><p style="cursor: pointer">{{$t('messages.english')}}</p></option>
                                          <option value="pt-BR"><p style="cursor: pointer">{{$t('messages.portuguese')}}</p></option>
                                        </select>
                                     </div>
                                 </div>
                             </nav>
                         </div>
                         <div class="divider"></div>
                         <div class="col-md-12">
                             <div class="main_footer text-center p-top-40 p-bottom-30">
                                 <p class="wow fadeInRight" data-wow-duration="1s">
                                  {{$t('messages.copyRight')}}
                                 </p>
                             </div>
                         </div>
                     </div>
                 </div>
             </footer>
         </div>
 </body>

</template>

<script>

export default {

  data () {
    return {
      locale:''
    }
  },
  computed: {
    currentLocale() {
      return this.locale = this.$i18n.locale;
    }
  },
}
</script>

<style scoped>

/*
Author: Xpeedstudio
Author URI: http://xpeedstudio.com
*/

/*==========================================
 01.  PREDIFINEED (FROM 1 TO 780 )
 02.  PRELOADER - LINE NO 786
 03.  NAVIGATION - LINE NO 930
 04.  HOME - LINE NO 1150
 05.  THU FEATURE - LINE NO 1280
 06.  THU FLIDE - LINE NO 1355
 07.  THU SERVICE - LINE NO 1385
 08.  PORTFOLIO - LINE NO 1444
 09.  THU SOLUTION - LINE NO 1620
 10.  THU TEAM - LINE NO 1658
 11.  THU CLIENTS FEEDBACK - LINE NO 1730
 12. THU BLOG - LINE NO 1848
 13. THU SUBCRIBS - LINE NO 1935
 14. FOOTER - LINE NO 2020
==========================================*/


/* ==========================================================================
   Author's custom styles
   ========================================================================== */
html,
body {
    /*background:url(../images/bodybg.png) repayet-y;*/

    background-repeat: repeat-y;
    font-size: 16px;
    color: #797979;
    width: 100%;
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    font-weight: 400;
    width:100%;
    font-family: 'Roboto';
}

/*------------------------------------------------------------------*/
/*   IE10 in Windows 8 and Windows Phone 8 Bug fix
/*-----------------------------------------------------------------*/

@-webkit-viewport { width: device-width; }
@-moz-viewport { width: device-width; }
@-ms-viewport { width: device-width; }
@-o-viewport { width: device-width; }
@viewport { width: device-width; }

/*
    Page Content
------------------------------------------*/

.page-content,
section { overflow: hidden; }

/*
    On Scroll Animations
------------------------------------------*/

/*.animated { visibility: hidden; }
.visible { visibility: visible; }*/

/*
    Spacing & Alignment

------------------------------------------*/
.roomy-100 {
    padding-top: 100px;
    padding-bottom: 100px;
}

.roomy-80 {
    padding-top: 100px;
    padding-bottom: 80px;
}

.roomy-70 {
    padding-top: 100px;
    padding-bottom: 70px;
}

.roomy-60 {
    padding-top: 100px;
    padding-bottom: 60px;
}

.roomy-50 {
    padding-top: 50px;
    padding-bottom: 50px;
}

.roomy-40 {
    padding-top: 40px;
    padding-bottom: 40px;
}

.roomy-30 {
    padding-top: 20px;
    padding-bottom: 20px;
}
.roomy-20 {
    padding-top: 20px;
    padding-bottom: 20px;
}

/*text color*/

.text-muted{}

.text-primary{color: #fc6a42 !important;;}
.text-finence{color:#13A0B2 !important;;}
.text-mega{color:#fc6a42 !important;;}
.text-white{color:#fff !important;;}
.text-black{color:#000 !important;}

.text-warning{}
.text-danger{}

.disabled{
    cursor: not-allowed;
}

/*bacground color*/
.lightbg {
    background-color: #f2f2f2;
}
.bg-primary{background-color: #1E8BC3;}
.bg-finence{background-color:#13A0B2;}
.bg-mega{background-color:#6a6b6c;}
.bg-grey{background-color: #f5f5f5;}
.bg-black{background-color: #353854;}
.bg-white{background-color: #fff;}

img {
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -user-select: none;
    -webkit-user-drag: none;
    -user-drag: none;
}
a,
a:hover,
a:active,
a:focus {
    text-decoration: none;
    outline: none;
}
a,
button,
a span {
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
}
a {
    -webkit-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
}

.btn:focus,
.btn:active {
    outline: inherit;
    background-color: transparent;
}
*,
*:before,
*:after {
    box-sizing: border-box;
    /*    direction: rtl;*/
}

p {
    margin: 0 0 15px;
}

.clear {
    clear: both;
}

img {
    max-width: 100%;
}
textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
    outline: none;
}

input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: transparent;
    background-image: none;
    color: rgb(0, 0, 0);
}

.form-control{
    border-radius: 0px;
    border:1px solid #ccc;
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075);
    width: 100%;
    height: 50px;
}

.form-control:focus {
    border-color: #bcefeb;
    outline: 0;
    box-shadow: inset 0 0px 0px rgba(0,0,0,.075),0 0 0px rgba(102,175,233,.6);
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
    font-family: 'Roboto';
    color:#1a1a1a;
    margin-bottom: 10px;
}

h1 {
    font-size: 3rem;
    line-height: 4rem;
}
h2 {
    font-size: 2.5rem;
    line-height: 3rem;
}
h3 {
    font-size: 1.500rem;
    line-height: 2rem;
}
h4 {
    font-size: 1.6rem;
    line-height: 2.2rem;
}
h5 {
    font-size: 1.125rem;
    line-height: 1.575rem
}
h6 {
    font-size: 1rem;
}



h1 span,
h2 span,
h3 span,
h4 span,
h5 span,
p span{
    color:#fc6a42;
}

p {
    line-height: 1.5rem;
}
p:last-child {
    margin-bottom: 0px;
}
/*colors*/
.w100 {
    font-weight: 100;
}

.w200 {
    font-weight: 200;
}

.w300 {
    font-weight: 300;
}

.w400 {
    font-weight: 400;
}

.w500 {
    font-weight: 500;
}

.w600 {
    font-weight: 600;
}

.w700 {
    font-weight: 700;
}

.w800 {
    font-weight: 800;
}


/*
Section
*/

.parallax-section {
    max-width: 100%;
    color: #ffffff;
}

ul{
    margin:0;
    padding:0;
    list-style:none;
}

/*all overlay*/
.overlay_dot{

    background-color: rgba(51,51,51,0.75);
    background-size: cover;
    position: absolute;
    left:0;
    top:0;
    width:100%;
    height: 100%;
}
.home-overlay {
    background-color: rgba(41, 39, 34, 0.90);
    width: 100%;
    height:100%;
    position: absolute;
    left:0;
    top: 0;
}

.video_overlay {
    background-color: rgba(41, 39, 34, 0.80);
    width: 100%;
    height:100%;
    position: absolute;
    left:0;
    top: 0;
}
.download_overlay{
    background: url(../../../static/images/downloadbg.png) repeat-y;
    width:100%;
    height: 100%;
    position: absolute;
    left:0;
    top:0;
}

.no-padding {
    padding: 0 !important;
    margin:0 !important;
}
.left-no-padding {
    padding-left: 0 !important;
}
.right-no-padding {
    padding-right: 0 !important;
}
.fluid-blocks-col {
    padding: 70px 40px 0 80px;
}
.fluid-blocks-col-right {
    padding: 70px 80px 0 40px;
}


/*
Separator
*/
.separator_left{
    width:85px;
    height:2px;
    margin:20px 0px;
    background: #fc6a42;
}
.separator_auto{
    width:85px;
    height:2px;
    margin:20px auto;
    background: #fc6a42;
}
.separator_small{
    width:30px;
    height:2px;
    margin:20px 0px;
    background: #fc6a42;
}

/*
Button
*/
.btn{
    -webkit-transition: all 0.6s;
    transition: all 0.6s;
    font-size:14px;
    font-weight: 600;
    border:1px solid;
}
.btn-primary{
    color: #fff;
    background-color: #4466c9;
    border:1px solid;
    border-color: #4466c9;
    padding: 1rem 2rem;
}
.btn-primary:hover{
    background-color: #eee;
    border-color: #eee;
    color:#4466c9;

}

.btn-danger{
    color: #fff;
    background-color: #fc6a42;
    border:1px solid;
    border-color: #fc6a42;
    padding: 1rem 2rem;
}

.btn-danger:hover{
    color: #fc6a42;
    background-color: #eee;
    border-color: #eee;
}



/*
socail icon
--------------------------------*/
/*
Extra height css
*/
.m-0{
    margin:0 !important;
}
.m-top-0{
    margin-top:0;
}
.m-r-0{
    margin-right: 0;
}
.m-l-0{
    margin-left: 0;
}
.m-b-0{
    margin-bottom: 0;
}

.m-r-15{
    margin-right: 15px;
}
.m-l-15{
    margin-left: 15px;
}
.m-top-10 {
    margin-top: 10px;
}
.m-top-20 {
    margin-top: 20px;
}
.m-top-30 {
    margin-top: 30px;
}
.m-top-40 {
    margin-top: 40px;
}
.m-top-50 {
    margin-top: 50px;
}
.m-top-60 {
    margin-top: 60px;
}
.m-top-70 {
    margin-top: 70px;
}
.m-top-80 {
    margin-top: 80px;
}
.m-top-90 {
    margin-top: 90px;
}
.m-top-100 {
    margin-top: 100px;
}
.m-top-110 {
    margin-top: 110px;
}
.m-top-120 {
    margin-top: 120px;
}

.m-t-b-80 {
    margin-top: 80px;
    margin-bottom: 80px;
}
.m-t-b-120 {
    margin-top: 120px;
    margin-bottom: 120px;
}

.m-bottom-10 {
    margin-top: 10px;
}

.m-bottom-20 {
    margin-bottom: 20px;
}
.m-bottom-30 {
    margin-bottom: 30px;
}

.m-bottom-40 {
    margin-bottom: 40px;
}

.m-bottom-60 {
    margin-bottom: 60px;
}

.m-bottom-70 {
    margin-bottom: 70px;
}

.m-bottom-80 {
    margin-bottom: 80px;
}

.m-bottom-90 {
    margin-bottom: 90px;
}

.m-bottom-100 {
    margin-bottom: 100px;
}

.m-bottom-110 {
    margin-bottom: 110px;
}

.m-bottom-120 {
    margin-bottom: 120px;
}

.m_t__b{
    margin: 14rem 0;
}
.p_t__b{
    padding: 6rem 0;
}

p-0{
    padding:0 !important;
}

.p-l-15{
    padding-left: 15px;
}

.p-r-15{
    padding-right: 15px;
}

.p-top-10 {
    padding-top: 10px;
}
.p-top-20 {
    padding-top: 1.33rem;
}

.p-bottom-20 {
    padding-bottom: 1.33rem;
}

.p-top-30 {
    padding-top: 1.875rem;
}

.p-bottom-30 {
    padding-bottom: 1.875rem;
}

.p-top-40 {
    padding-top: 2.66rem;
}

.p-bottom-40 {
    padding-bottom: 2.66rem;
}

.p-top-60 {
    padding-top: 5rem;
}

.p-bottom-60 {
    padding-bottom: 5rem;
}

.p-top-80 {
    padding-top: 5.714rem;
}

.p-bottom-80 {
    padding-bottom: 5.714rem;
}

.p-top-90 {
    padding-top: 6.429rem;
}

.p-bottom-90 {
    padding-bottom: 6.429rem;
}
.p-top-100 {
    padding-top: 100px;
}

.p-bottom-100 {
    padding-bottom: 100px;
}
.p-top-110 {
    padding-top: 110px;
}

.p-bottom-110 {
    padding-bottom: 110px;
}

.p-bottom-0 {
    padding-bottom: 0;
}

.p_l_r{
    padding-left: 5.714rem;
    padding-right: 5.714rem;
}

/*padding*/
.padding-twenty {
    padding: 10px 0;
}
.padding-fourty {
    padding: 20px 0;
}
.padding-sixty {
    padding: 30px 0;
}
.padding-eighty {
    padding: 40px 0;
}

/*border*/
.no-border-top{
    border-top:0px solid transparent !important;
}
.no-border-rigth{
    border-right:0px solid transparent !important;
}

/*for placeholder changes*/

input[type="email"].form-control::-webkit-input-placeholder {
    color: #fff;
    background-color: transparent;
}

input::-webkit-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input::-moz-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input:-ms-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}

input::placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-webkit-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-moz-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
input::-ms-input-placeholder {
    color: #cdcdcd;
    font-style:italic;
}
textarea::-webkit-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}
textarea::-moz-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}
textarea::-ms-input-placeholder{
    color: #cdcdcd;
    font-style:italic;
    padding: 5px;
}

/*for image bg*/
/*.img-bg{
  background: url(../images/home-msg.jpg) no-repeat center top fixed;
  background-size
  -moz-background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;
  overflow: hidden;
}*/


.transform_scal_rotate:hover img{
    -webkit-transform: scale(1.1) rotate(4deg);
    transform: scale(1.1) rotate(4deg);
}

.culmn{
    width:100%;
    overflow: hidden;
}
/*heading title all area*/
.head_title{
    padding-bottom: 7.143rem;
    overflow: hidden;
}
.head_title h2{
    font-weight: 700;
    font-size:2.250rem;
    color: rgb(106, 90, 205);
}
.head_title h5{
    font-weight: 400;
    font-size:1.125rem;
    color:#999999;
}

/*End off pridifain css*/

/*Preloader*/
#loading{
    background-color: #fc6a42;
    height: 100%;
    width:  100%;
    position: fixed;
    z-index: 1;
    margin-top: 0px;
    top: 0px;
    left:0;
    z-index: 9999;
}
#loading-center{
    width: 100%;
    height: 100%;
    position: relative;
}
#loading-center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-left: -25px;
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-animation: loading-center-absolute 1.5s infinite;
    animation: loading-center-absolute 1.5s infinite;

}
.object{
    width: 25px;
    height: 25px;
    background-color: #FFF;
    float: left;
}

#object_one {
    -webkit-animation: object_one 1.5s infinite;
    animation: object_one 1.5s infinite;
}
#object_two {
    -webkit-animation: object_two 1.5s infinite;
    animation: object_two 1.5s infinite;
}
#object_three {
    -webkit-animation: object_three 1.5s infinite;
    animation: object_three 1.5s infinite;
}
#object_four {
    -webkit-animation: object_four 1.5s infinite;
    animation: object_four 1.5s infinite;
}


@-webkit-keyframes loading-center-absolute {
    100% { -webkit-transform: rotate(-45deg); }

}

@keyframes loading-center-absolute {
    100% {
        transform:  rotate(-45deg);
        -webkit-transform:  rotate(-45deg);
    }
}



@-webkit-keyframes object_one {
    25% { -webkit-transform: translate(0,-50px) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }

}

@keyframes object_one {
    25% {
        transform: translate(0,-50px) rotate(-180deg);
        -webkit-transform: translate(0,-50px) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}


@-webkit-keyframes object_two {
    25% { -webkit-transform: translate(50px,0) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_two {
    25% {
        transform: translate(50px,0) rotate(-180deg);
        -webkit-transform: translate(50px,0) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}

@-webkit-keyframes object_three {
    25% { -webkit-transform: translate(-50px,0) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_three {
    25% {
        transform:  translate(-50px,0) rotate(-180deg);
        -webkit-transform:  translate(-50px,0) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: rtranslate(0,0) rotate(-180deg);
    }
}


@-webkit-keyframes object_four {
    25% { -webkit-transform: translate(0,50px) rotate(-180deg); }
    100% { -webkit-transform: translate(0,0) rotate(-180deg); }
}

@keyframes object_four {
    25% {
        transform: translate(0,50px) rotate(-180deg);
        -webkit-transform: translate(0,50px) rotate(-180deg);
    }
    100% {
        transform: translate(0,0) rotate(-180deg);
        -webkit-transform: translate(0,0) rotate(-180deg);
    }
}
/*End off Preloader*/


/*
Nav Menu style
==================*/

.navbar-brand {
  /*  padding: 30px 15px;*/

}


/*
Home Section style
==================*/

.home{
    background: url(../../../static/images/homebg.png) no-repeat top center;
    background-size: cover;
    position: relative;
}
.main_home{
    overflow: hidden;
    padding-top: 200px;
    padding-bottom: 230px;
}
.home_text h1{
    font-family: 'Roboto';
    font-size:3.750rem;
    font-weight: 700;
    line-height: 4.5rem;
}
.home_btns{
    margin-left:-10px;
}
.home_btns a{
    margin-left:10px;
}
.btn-transparent {
    background-color: Transparent;
    background-repeat:no-repeat;
    border: none;
    cursor:pointer;
    overflow: hidden;
    outline:none;
}

.scrooldown{
    position: absolute;
    left: 48.5%;
    bottom: 10%;
    width: 40px;
    height: 40px;
    line-height: 37px;
    background: #f4f5f9;
    border-radius: 50%;
    text-align: center;
    z-index: 3;
}
.scrooldown a i{
    font-size:0.775rem;
    color:#e74c3c;
}

/*
Featured section style
========================*/
.main_features{}
.features_item{}
.features_item .f_item_icon{
    float: left;
    width:20%;
    display: inline-block;
    margin-right: 15px;
}
.features_item .f_item_icon i{
    font-size:4rem;
    color:#fc6a42;
}
.features_item .f_item_text{
    display: inline-block;
    width:70%;
}


/*
Testimonial Section style
=====================*/
.main_drag{
    overflow: hidden;
}

.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
    margin: 20px auto;
}
.swiper-slide {
    text-align: center;
    background-position: center;
    background-size: cover;
    width: 270px;
    height: 476px;


    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    box-shadow: 0px 0px 15px 0px #ddd;
}


/*
Screen01 Section style
=====================*/

.screen03,
.screen02,
.screen01{
    overflow: hidden;
    width: 100%;
}

.screen03_img,
.screen02_img,
.screen01_img{
    position: relative;
}
.screen03_img img,
.screen02_img img,
.screen01_img img{
    position: relative;
    z-index: 1;
}

.rainy,
.sunny,
.cloudy{
    font-weight: 250;
    transform: rotate(90deg);
    position: absolute;
    color: #ddd;
    z-index: 0;
}
.rainy{
    top: 270px;
    right: -185px;
    font-size: 15rem;

}
.sunny{
    top: 250px;
    right: -215px;
    font-size: 14.6rem;
}
.cloudy{
    top: 255px;
    right: -210px;
    font-size: 13rem;
}
.attr_rio,
.attr_deg{
    position: absolute;
    width:55px;
    height: 55px;
    line-height: 55px;
    display: inline-block;
    border-radius: 50%;
}
.attr_deg{
    top: 10%;
    right: 6%;
    background-color: #ffffff;
}
.attr_rio{
    bottom:0;
    right:0;
    background-color: #fcec64;
}
.attr_deg4,
.attr_rainy2,
.attr_deg3,
.attr_sun2,
.attr_cloudy,
.attr_deg2,
.attr_lon,
.attr_sun{
    position: absolute;
    width:90px;
    height: 90px;
    line-height: 90px;
    display: inline-block;
    border-radius: 50%;
}

.attr_sun{
    top: 45%;
    left: 0%;
    background-color: #fc6a42;
}
.attr_lon{
    top:40%;
    right:0%;
    background-color: #4466c9;
}
.attr_cloudy{
    top: 27%;
    right: 16%;
    background-color: #fcec64;
    z-index: 4;
}
.attr_deg2{
    top:60%;
    left:10%;
    background-color:#6ca3ff;
    z-index: 4;
}
.attr_sun2{
    top: 20%;
    right: 14%;
    background-color: #f2a14e;
    z-index: 4;
}
.attr_deg3{
    top:60%;
    left:13%;
    background-color:#fc6a42;
    z-index: 4;
}
.attr_rainy2{
    top: 27%;
    right: 16%;
    background-color: #b8faee;
    z-index: 4;
}
.attr_deg4{
    top:60%;
    left:13%;
    background-color:#7693c8;
    z-index: 4;
}

.screen01_content{}
.screen03_content p,
.screen02_content p,
.screen01_content p{
    font-size:1.500rem;
    line-height: 2.125rem;
}
.screen03_content ul li,
.screen02_content ul li,
.screen01_content ul li{
    border: 1px dashed #ddd;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    line-height: 60px;
    box-shadow: 0px 0px 10px 0px #ededf2;
    margin-right: -15px;
    background-color: #fff;
    position: relative;
    color:#ededf2;
}
.screen03_content ul li:nth-child(1),
.screen02_content ul li:nth-child(1),
.screen01_content ul li:nth-child(1){
    z-index: 2;
}
.screen03_content ul li:nth-child(2),
.screen02_content ul li:nth-child(2),
.screen01_content ul li:nth-child(2){
    z-index: 1;
}
.screen03_content ul li:nth-child(3),
.screen02_content ul li:nth-child(3),
.screen01_content ul li:nth-child(3){
    z-index: 0
}

/*
People Section style
=====================*/

.main_reviews .head_title{
    padding-bottom:1rem;
}
.reviews_content{}
.reviews_item{
    position: relative;
    width:100%;
}
.reviews_item h3,
.reviews_item h5{
    color:#353854;
}
.reviews_item_icon{
    display: block;
    width: 100%;
    font-size: 6rem;
    color: #648cff;
    height: 55px;
    margin-bottom: 20px;
}
.reviews_item_icon1{
    display: inline-block;
    width: 80px;
    font-size: 6rem;
    color: #648cff;
    height: 55px;
    position: absolute;
    right: 0;
    bottom: -45px;
    transform: rotate(-180deg);
}



/*
Download Section style
=====================*/
.download{
    position: relative;
}
.download_item h5{
    line-height: 1.5rem;
    width:70%;
}
.download_item img.app_right{
    position: relative;
    bottom:-60px;
}
.download_app{
    margin-left:-10px;
}
.download_app a{
    margin-left:10px;
}

/*
Footer Section style
=====================*/
nav.navbar.bootsnav.footer-menu{
    background-color: transparent;
    border-bottom: 0px;
}
nav.navbar.bootsnav.footer-menu ul li a{
    color:#b5b5c8;
}
nav.navbar.bootsnav.footer-menu ul li a:hover{
    color:#fff;
}
.divider{
    width:100%;
    height: 1px;
    background-color: #434769;
    display: inline-block;
}
.main_footer{
    overflow: hidden;
}

.main_footer i {
    padding: 0px 5px;
    color: #ff0000;
}


/*Scroll Up*/
.scrollup {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    opacity: .3;
    position: fixed;
    bottom: 20px;
    right: 25px;
    color: #fff;
    cursor: pointer;
    background-color: #000;
    z-index: 1000;
    transition: opacity .5s, background-color .5s;
    -moz-transition: opacity .5s, background-color .5s;
    -webkit-transition: opacity .5s, background-color .5s;
}

.scrollup i {
    font-size: 13px;
    position: absolute;
    opacity: 1;
    color: #fff;
    left: 50%;
    top: 50%;
    margin-top: -7px;
    margin-left: -6px;
    text-decoration: none;
}

.scrollup:hover {
    background-color: blueviolet;
    color:#fff;
}


</style>
