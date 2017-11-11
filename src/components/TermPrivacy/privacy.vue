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
                   <div id="pt" v-if="currentLocale == 'pt-BR'">
                      <div>
                        <p>POL&Iacute;TICA DE PRIVACIDADE</p>
                        <p>&nbsp;</p>
                        <p>Broodcast, Inc. &eacute; uma empresa estabelecida em Delaware, USA, com sede na Calif&oacute;rnia. (Broodcast). Esta Pol&iacute;tica de Privacidade rege o uso do site Broodcast e aplica&ccedil;&otilde;es m&oacute;veis. Ao usar ou acessar site Broodcast ou aplica&ccedil;&otilde;es m&oacute;veis, voc&ecirc; concorda em ficar vinculado aos termos dentro desta Pol&iacute;tica de Privacidade e os Termos de Uso. Esta pol&iacute;tica pode referir-se a usu&aacute;rios como "usu&aacute;rio" "voc&ecirc;" ou e pode se referir a Broodcast como "n&oacute;s", "n&oacute;s" ou "nosso". Se voc&ecirc; n&atilde;o concordar com os termos dentro desta pol&iacute;tica de privacidade e os correspondentes Termos de Uso.&nbsp; Favor n&atilde;o acessar ou utilizar o site Broodcast ou aplica&ccedil;&otilde;es m&oacute;veis.</p>
                        <p>&nbsp;</p>
                        <p>INFORMA&Ccedil;&Otilde;ES PESSOAIS ARMAZENADAS POR BROODCAST</p>
                        <p>&nbsp;</p>
                        <p>A fim de realizar os servi&ccedil;os da Broodcast e proporcionar uma grande experi&ecirc;ncia do usu&aacute;rio, vamos coletar e armazenar as seguintes informa&ccedil;&otilde;es sobre voc&ecirc;:</p>
                        <p>&nbsp;</p>
                        <p>1. Nome e sobrenome</p>
                        <p>2. Imagem de Perfil</p>
                        <p>3. C&oacute;digo Postal (opcional)</p>
                        <p>4. seu sexo (opcional)</p>
                        <p>5. O seu n&uacute;mero de telem&oacute;vel (opcional)</p>
                        <p>6. Conte&uacute;do que for postado publicamente ou em privado na sua conta Broodcast</p>
                        <p>7. Pesquisas conclu&iacute;das atrav&eacute;s do aplicativo m&oacute;vel ou site</p>
                        <p>8. Configura&ccedil;&otilde;es de Prefer&ecirc;ncia</p>
                        <p>9. Informa&ccedil;&otilde;es do dispositivo M&oacute;vel e identifica&ccedil;&atilde;o</p>
                        <p>10. Informa&ccedil;&otilde;es de localiza&ccedil;&atilde;o do dispositivo m&oacute;vel.</p>
                        <p>11. Informa&ccedil;&otilde;es de perfil de sites de terceiros&nbsp; e Media social.</p>
                        <p>12. informa&ccedil;&atilde;o armazenada ou arquivos ou conservados em aplicativo m&oacute;vel.</p>
                        <p>13. Liga&ccedil;&otilde;es para outros usu&aacute;rios no aplicativo m&oacute;vel.</p>
                        <p>14. mensagens enviadas para usu&aacute;rios no aplicativo m&oacute;vel.</p>
                        <p>15. Seu endere&ccedil;o de email</p>
                        <p>16. Quaisquer e-mails que voc&ecirc; envia para Broodcast</p>
                        <p>17. Endere&ccedil;o IP</p>
                        <p>18. Nome de Dom&iacute;nio</p>
                        <p>19. Tempos de acesso ao site ou aplicativo m&oacute;vel</p>
                        <p>20. Site que Referido Broodcast</p>
                        <p>21. O tipo de sistema operacional</p>
                        <p>22. Informa&ccedil;&atilde;o de pagamento, incluindo cart&otilde;es de cr&eacute;dito para Servi&ccedil;os Pagos, N&uacute;mero do cart&atilde;o de d&eacute;bito ou cr&eacute;dito, Informa&ccedil;&otilde;es de conta e autentica&ccedil;&atilde;o, Faturamento, Transporte e detalhes de contato</p>
                        <p>&nbsp;</p>
                        <p>Pode n&atilde;o ser facilmente percept&iacute;vel para voc&ecirc; quando esses dados est&atilde;o sendo coletados. Por exemplo, quando voc&ecirc; vem para o nosso site, o seu endere&ccedil;o de IP &eacute; recolhido para que possamos saber para onde enviar as informa&ccedil;&otilde;es que voc&ecirc; est&aacute; solicitando. Um endere&ccedil;o IP &eacute; um n&uacute;mero que &eacute; utilizado pelos computadores na rede para identificar seu computador ou dispositivo m&oacute;vel, cada vez que voc&ecirc; efetuar logon no Internet. Da mesma forma, Broodcast ou servi&ccedil;os de terceiros podem colocar cookies ou usar web beacons, que podem ser usados para identificar algumas de suas prefer&ecirc;ncias. Um "cookie" &eacute; um pequeno arquivo ou dispositivo de manuten&ccedil;&atilde;o de registros que os sites costumam armazenar no computador ou dispositivo m&oacute;vel de um usu&aacute;rio. (Voc&ecirc; pode desativar os cookies ou definir o seu browser para alert&aacute;-lo quando os cookies est&atilde;o sendo enviados para o seu computador ou dispositivo m&oacute;vel.)</p>
                        <p>&nbsp;</p>
                        <p>INFORMA&Ccedil;&Otilde;ES DE LOCALIZA&Ccedil;&Atilde;O PRECISA, E COMO OPTAR PARA N&Atilde;O COMPARTILHAR LOCALIZA&Ccedil;&Atilde;O.</p>
                        <p>&nbsp;</p>
                        <p>Os servi&ccedil;os de nosso aplicativo m&oacute;veis utilizam localiza&ccedil;&atilde;o espec&iacute;fica, portanto, a fim de funcionar corretamente, as Aplica&ccedil;&otilde;es M&oacute;veis precisa saber sua localiza&ccedil;&atilde;o. Sempre que voc&ecirc; abrir e usar / interagir com nossos aplicativos em seu dispositivo m&oacute;vel ou ir a um dos nossos Sites, utilizamos as informa&ccedil;&otilde;es de localiza&ccedil;&atilde;o do seu dispositivo m&oacute;vel ou navegador (por exemplo, latitude e longitude) para ajustar a experi&ecirc;ncia de aplicativos m&oacute;veis da sua localiza&ccedil;&atilde;o actual (ou seja, vamos mostrar-lhe uma lista de locais pr&oacute;ximos, pessoas e grupos). Al&eacute;m disso, o aplicativo m&oacute;vel usa a localiza&ccedil;&atilde;o do dispositivo m&oacute;vel em segundo plano "para fornecer os Servi&ccedil;os, incluindo o envio de notifica&ccedil;&otilde;es. Se voc&ecirc; estiver com 'a localiza&ccedil;&atilde;o em segundo plano ativo' , o aplicativo m&oacute;vel ir&aacute;, de tempos em tempos, nos dizer sobre a localiza&ccedil;&atilde;o do seu dispositivo, mesmo sem voc&ecirc; n&atilde;o est&aacute; interagindo diretamente com o aplicativo.</p>
                        <p>&nbsp;</p>
                        <p>Broodcast tamb&eacute;m tem duas configura&ccedil;&otilde;es diferentes para mostrar a localiza&ccedil;&atilde;o dos usu&aacute;rios do aplicativo m&oacute;vel para outros usu&aacute;rios da nossa plataforma.</p>
                        <p>&nbsp;</p>
                        <p>A imagem de perfil que aparece sobre o mapa, arredondado por um c&iacute;rculo que se alternam entre Verde / ON e Vermelho / OFF quando toque nele.</p>
                        <p>&nbsp;</p>
                        <p>The Verde / On indicam que outros usu&aacute;rios s&atilde;o capazes de ver a sua localiza&ccedil;&atilde;o exacta no mapa e interagir com voc&ecirc;. O Vermelho / OFF indicam que os usu&aacute;rios n&atilde;o ser&atilde;o capazes de ver a sua localiza&ccedil;&atilde;o exacta.</p>
                        <p>&nbsp;</p>
                        <p>Tamb&eacute;m atrav&eacute;s do recurso de Pr&oacute;ximo, que mostra aos usu&aacute;rios pr&oacute;ximas que est&atilde;o usando nosso aplicativo m&oacute;vel sem revelar a localiza&ccedil;&atilde;o exacta. Essa caracter&iacute;stica permite que os usu&aacute;rios sejam convidados a participar de grupos, atender meetups ou ser contactados por outros usu&aacute;rios.</p>
                        <p>&nbsp;</p>
                        <p>INFORMA&Ccedil;OES PESSOAIS ARMAZENADAS POR TERCEIROS</p>
                        <p>&nbsp;</p>
                        <p>Ao usar o aplicativo m&oacute;vel Broodcast , voc&ecirc; entende que voc&ecirc; vai ser capaz de interagir com servi&ccedil;os de terceiros e que seu perfil de usu&aacute;rio tem recursos p&uacute;blicos, onde os usu&aacute;rios de terceiros podem receber informa&ccedil;&otilde;es pessoais sobre voc&ecirc;. Tenha cuidado ao divulgar qualquer informa&ccedil;&atilde;o no seu perfil p&uacute;blico ou diretamente para outros usu&aacute;rios. BROODCAST N&Atilde;O &Eacute; RESPONS&Aacute;VEL PELO USO DE OUTROS das informa&ccedil;&otilde;es que voc&ecirc; divulgar publicamente.</p>
                        <p>&nbsp;</p>
                        <p>N&oacute;s tamb&eacute;m podemos usar suas informa&ccedil;&otilde;es para contat&aacute;-lo sobre nossos produtos e servi&ccedil;os que possam ser de seu interesse pr&oacute;prio e de terceiros. Podemos usar as informa&ccedil;&otilde;es que coletamos de voc&ecirc; para nos permitir exibir an&uacute;ncios para p&uacute;blicos-alvo de nossos anunciantes. Mesmo que n&oacute;s n&atilde;o divulgamos suas informa&ccedil;&otilde;es pessoais para estes fins sem o seu consentimento, se voc&ecirc; clicar ou interagir com um an&uacute;ncio, o anunciante pode assumir que voc&ecirc; cumprir seus crit&eacute;rios alvo.</p>
                        <p>O Broodcast n&atilde;o vender os dados a terceiros, mas pode divulgar informa&ccedil;&otilde;es sobre voc&ecirc; a terceiros para obter ajuda na melhoria dos produtos e servi&ccedil;os Broodcast. Broodcast tamb&eacute;m pode divulgar informa&ccedil;&otilde;es sobre voc&ecirc; a terceiros, onde temos uma boa f&eacute; que tal divulga&ccedil;&atilde;o &eacute; necess&aacute;ria, a fim de: (i) proteger, refor&ccedil;ar ou defender os direitos legais, privacidade, seguran&ccedil;a ou propriedade da Broodcast, o nosso afiliadas ou seus funcion&aacute;rios, agentes e contratantes (incluindo a aplica&ccedil;&atilde;o de nossos acordos e termos de uso); (Ii) proteger a seguran&ccedil;a, privacidade e seguran&ccedil;a dos utilizadores dos empregados Broodcast, propriet&aacute;rios, ou membros do p&uacute;blico; (Iii) proteger contra fraude ou para efeitos de gest&atilde;o de riscos; (Iv) cumprir a lei ou processo legal; ou (v) responder a pedidos de autoridades p&uacute;blicas e governamentais.</p>
                        <p>O aplicativo m&oacute;vel permite que os usu&aacute;rios fa&ccedil;am login atrav&eacute;s de suas contas do Facebook, bem como para postar aviso de transa&ccedil;&otilde;es consumada em seus perfis no Facebook. As pol&iacute;ticas de privacidade do Facebook, incluindo os dados Facebook recolhe e os usos de dados, est&aacute; al&eacute;m do nosso controle, e n&atilde;o assumimos responsabilidade por pr&aacute;ticas do Facebook. Antes de enviar qualquer informa&ccedil;&atilde;o pessoal para Facebook, recomendamos que voc&ecirc; leia a pol&iacute;tica de privacidade do Facebook, que pode ser encontrada no seguinte link: https://www.facebook.com/policies.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>COMO N&Oacute;S COMPARTILHAMOS INFORMA&Ccedil;&Otilde;ES</p>
                        <p>&nbsp;</p>
                        <p>Referimo-nos a outros usu&aacute;rios que um determinado usu&aacute;rio se comunica ou compartilha informa&ccedil;&otilde;es como "MEUS CONTATOS.".</p>
                        <p>Os conte&uacute;dos podem ser compartilhados entre dois usu&aacute;rios. Bem como entre grupos, e cada usu&aacute;rio pode compartilhar o conte&uacute;do individualmente.</p>
                        <p>O conte&uacute;do pode ser publicado como: mensagens, coment&aacute;rios, "Check-ins" em um local, imagens, coment&aacute;rios, e meetups arranjados entre os usu&aacute;rios.</p>
                        <p>Informa&ccedil;&atilde;o de Meetups podem ser compartilhada com os propriet&aacute;rios ou operadores de perfis de empresas, ligado ao destino selecionado para o meetup. As informa&ccedil;&otilde;es compartilhadas podem ser a respeito de um meetup p&uacute;blicamente divulgada a todos os participantes e ao perfil da empresa. Informa&ccedil;&otilde;es de meetups compartilhadas com o perfil de empresa permite que a empresa se comunicar, e compartilhar informa&ccedil;&atilde;o, ou an&uacute;ncios personalizados e relevantes aos participantes.</p>
                        <p>Al&eacute;m disso, os usu&aacute;rios (n&atilde;o participantes do meetup ) externos que est&atilde;o visualizando um perfil de empresa, poder&atilde;o ver a lista de participantes do meetup para aquele lugar.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>COMUNICA&Ccedil;&Atilde;O, COMERCIAL E N&Atilde;O COMERCIAL</p>
                        <p>&nbsp;</p>
                        <p>Ao fornecer informa&ccedil;&otilde;es ao site, como se inscrever para uma newsletter ou promo&ccedil;&atilde;o, voc&ecirc; renuncia a todos os direitos para apresentar queixas relativas a e-mail n&atilde;o solicitadas a partir Broodcast, desde que voc&ecirc; tenha concordado com essa comunica&ccedil;&atilde;o, fornecendo suas informa&ccedil;&otilde;es para Broodcast. No entanto, voc&ecirc; pode cancelar a assinatura de certas comunica&ccedil;&otilde;es por notificar Broodcast que j&aacute; n&atilde;o desejam receber solicita&ccedil;&otilde;es ou informa&ccedil;&otilde;es. Broodcast ir&aacute; remov&ecirc;-lo do banco de dados, onde voc&ecirc; tem o direito de pedir isso sob a Pol&iacute;tica de Privacidade, Termos de Uso, ou da lei aplic&aacute;vel, ou de onde Broodcast decide voluntariamente aceitar o pedido.</p>
                        <p>&nbsp;</p>
                        <p>LEI DE PROTE&Ccedil;&Atilde;O DE PRIVACIDADE DE CRIAN&Ccedil;AS</p>
                        <p>&nbsp;</p>
                        <p>O site Broodcast e aplica&ccedil;&otilde;es m&oacute;veis s&atilde;o direcionados para adultos, com idade superior a 18. Broodcast n&atilde;o recolhe intencionalmente informa&ccedil;&otilde;es de crian&ccedil;as com menos de 13 anos de idade ou ter quaisquer motivos razo&aacute;veis para acreditar que as pessoas menores de 13 anos est&atilde;o acessando o site ou fazer uso de Aplica&ccedil;&atilde;o m&oacute;vel da Broodcast. Se Broodcast descobre qualquer informa&ccedil;&atilde;o pessoal inadvertidamente coletado de uma pessoa sob a idade de 13, que a informa&ccedil;&atilde;o ser&aacute; rapidamente exclu&iacute;do do seu 'registros. Se voc&ecirc; acredita que Broodcast pode ter qualquer informa&ccedil;&atilde;o de uma pessoa com menos de 13 anos de idade, por favor contacte Broodcast em contact@broodcast.com.</p>
                        <p>&nbsp;</p>
                        <p>SEUS DIREITOS DE PRIVACIDADE NA CALIFORNIA</p>
                        <p>&nbsp;</p>
                        <p>Broodcast convida os moradores do Estado da Calif&oacute;rnia para usar a sua aplica&ccedil;&atilde;o m&oacute;vel e site, e est&aacute; conformidade com a California Business and Professions C&oacute;digo &sect;&sect; 22.575-22.579. Se voc&ecirc; &eacute; um morador da Calif&oacute;rnia pode pedir determinadas informa&ccedil;&otilde;es relacionadas com a divulga&ccedil;&atilde;o de informa&ccedil;&otilde;es pessoais a terceiros para fins de marketing direto. Por favor, envie um pedido por escrito</p>
                        <p>1911 Martin Luther Jr Way.</p>
                        <p>Berkeley CA 94704.</p>
                        <p>&nbsp;</p>
                        <p>V&aacute;rias disposi&ccedil;&otilde;es em toda esta Privacidade atender a requisitos relativos Pol&iacute;tica dos estatutos de privacidade californiana. Se voc&ecirc; tiver alguma d&uacute;vida entre em contato com Broodcast pelo contact@broodcast.com</p>
                        <p>&nbsp;</p>
                        <p>ACESSO DE USU&Aacute;RIOS E CONTROLE</p>
                        <p>&nbsp;</p>
                        <p>Se voc&ecirc; gostaria de acessar, revisar, corrigir, atualizar, suprimir ou limitar o uso de suas informa&ccedil;&otilde;es pessoais que voc&ecirc; forneceu anteriormente diretamente para n&oacute;s, pode contactar-nos em contact@broodcast.com. Em seu pedido, por favor incluir o seu endere&ccedil;o de e-mail, nome, endere&ccedil;o e n&uacute;mero de telefone e especificar claramente quais informa&ccedil;&otilde;es voc&ecirc; gostaria de acessar, alterar, actualizar ou suprimir. Vamos tentar satisfazer o seu pedido, logo que seja razoavelmente poss&iacute;vel.</p>
                        <p>Reservamo-nos o direito de fazer altera&ccedil;&otilde;es a esta pol&iacute;tica de privacidade a qualquer momento. Se mudarmos nossa pol&iacute;tica de privacidade, iremos notific&aacute;-lo via e-mail enviado para o endere&ccedil;o de e-mail fornecido no momento da inscri&ccedil;&atilde;o, assim como publicar uma vers&atilde;o actualizada desta Pol&iacute;tica de Privacidade em nosso site para que voc&ecirc; e outros usu&aacute;rios estarem sempre cientes do que informa&ccedil;&otilde;es que recolhemos, como a usamos, e sob quais circunst&acirc;ncias, se houver, as divulgamos. As altera&ccedil;&otilde;es n&atilde;o ser&atilde;o aplicadas retroativamente e mudan&ccedil;as abordando novas fun&ccedil;&otilde;es para um servi&ccedil;o ou as altera&ccedil;&otilde;es feitas por raz&otilde;es legais entrar&atilde;o em vigor imediatamente. Se voc&ecirc; n&atilde;o concordar com os termos modificados, voc&ecirc; deve interromper o uso do site e aplica&ccedil;&otilde;es m&oacute;veis. Seu uso continuado do Site e Aplica&ccedil;&otilde;es M&oacute;veis ap&oacute;s tais altera&ccedil;&otilde;es constitui a sua aceita&ccedil;&atilde;o da nova Pol&iacute;tica de Privacidade. Voc&ecirc; tamb&eacute;m deve verificar de vez em quando para garantir que voc&ecirc; est&aacute; ciente de quaisquer altera&ccedil;&otilde;es.</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
                        <p>&nbsp;</p>
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
  created(){
    console.log("Component created");
  }
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
