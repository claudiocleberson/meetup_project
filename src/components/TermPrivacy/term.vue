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
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px; line-height: 107%; font-size: 14pt;">TERMOS DE USO</span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Este site e o aplicativo m&oacute;vel s&atilde;o de propriedade e operados por Broodcast, Inc, uma empresa criada em Delaware USA, localizada na Calif&oacute;rnia ( "Broodcast"). Neste Termos de Uso, o usu&aacute;rio pode ser referido como "voc&ecirc;" e Broodcast pode ser referido como "n&oacute;s" ou "nosso". Ao usar ou acessar o site Broodcast ou aplicativo m&oacute;vel, voc&ecirc; concorda com estes Termos de Uso e nossa Pol&iacute;tica de Privacidade.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Estes Termos de Uso est&atilde;o em vigor para todas as contas de usu&aacute;rio Broodcast existentes e futuras, incluindo, mas sem limita&ccedil;&atilde;o para os usu&aacute;rios que t&ecirc;m acesso a perfil de empresas para gerir as suas listas de empresas cadastradas.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">TERMOS PARA CRIAR UMA NOVA CONTA &amp; SITE DE ACESSO</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">1. Voc&ecirc; deve ter pelo menos 18 anos de idade para usar o site Broodcast ou aplicativo m&oacute;vel.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">2. Voc&ecirc; n&atilde;o pode enviar conte&uacute;do com nudez, completo ou parcial. Conte&uacute;do discriminat&oacute;rio, ilegal, violento, pornogr&aacute;fico ou sexualmente sugestivos atrav&eacute;s do aplicativo m&oacute;vel.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">3. Voc&ecirc; &eacute; respons&aacute;vel por qualquer atividade que ocorra atrav&eacute;s da sua conta e voc&ecirc; concorda que voc&ecirc; n&atilde;o vai vender, transferir, licenciar ou ceder sua conta, seguidores, nome de usu&aacute;rio, ou quaisquer direitos de conta.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">4. Broodcast pro&iacute;be a cria&ccedil;&atilde;o de contas que n&atilde;o seja para uso pr&oacute;prio ou para sua empresa.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">5. Voc&ecirc; declara que todas as informa&ccedil;&otilde;es que voc&ecirc; fornecer ou fornecidas a Broodcast no momento do registo e em todas as outras ser&atilde;o verdadeiras, exatas, atuais e completas e voc&ecirc; concorda em atualizar suas informa&ccedil;&otilde;es conforme necess&aacute;rio para manter a sua veracidade e exatid&atilde;o.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">6. Voc&ecirc; concorda que n&atilde;o ir&aacute; solicitar, coletar ou utilizar as credenciais de login de outros usu&aacute;rios Broodcast.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">7. Voc&ecirc; &eacute; respons&aacute;vel por manter sua senha secreta e seguro.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">8. Voc&ecirc; n&atilde;o vai enviar spam, difamar, perseguir, intimidar, abusar, assediar, amea&ccedil;ar, personificar ou intimidar as pessoas ou entidades e voc&ecirc; n&atilde;o deve postar informa&ccedil;&otilde;es particulares ou confidenciais atrav&eacute;s do site ou aplicativo m&oacute;vel, incluindo, sem limita&ccedil;&atilde;o, o seu ou outras pessoas, informa&ccedil;&otilde;es de cart&atilde;o de cr&eacute;dito, CPF, RG ou qualquer outro documento pessoal, n&uacute;meros de telefone n&atilde;o-p&uacute;blicos ou endere&ccedil;os de e-mail n&atilde;o-p&uacute;blicos.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">9. Voc&ecirc; &eacute; o &uacute;nico respons&aacute;vel pela sua conduta e quaisquer dados, texto, arquivos, informa&ccedil;&otilde;es, nomes de usu&aacute;rios, imagens, gr&aacute;ficos, fotos, perfis, &aacute;udio e v&iacute;deo, sons, obras musicais, obras de autoria, aplicativos, links e outros conte&uacute;dos ou materiais (coletivamente, "conte&uacute;do") que voc&ecirc; enviar, postar ou exibir nos ou atrav&eacute;s do site ou aplicativo m&oacute;vel.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">10. Voc&ecirc; n&atilde;o pode usar o aplicativo m&oacute;vel ou site para fins ilegais ou n&atilde;o autorizados. Voc&ecirc; concorda em cumprir todas as leis, regras e regulamentos aplic&aacute;veisao seu uso do Site e aplicativo m&oacute;vel e o seu conte&uacute;do, incluindo mas n&atilde;o limitado a, leis de direitos autorais.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">11. Voc&ecirc; n&atilde;o ir&aacute; interferir ou interromper os servi&ccedil;os do site ou aplicativo m&oacute;vel ou servidores ou redes conectadas ao site ou aplicativo m&oacute;vel, incluindo atrav&eacute;s da transmiss&atilde;o de qualquer vermes, v&iacute;rus, spyware, malware ou qualquer outro c&oacute;digo de natureza destrutiva ou perturbadora. Voc&ecirc; n&atilde;o pode injetar conte&uacute;do ou c&oacute;digo ou de outra forma alterar ou interferir com a forma como qualquer do site ou aplicativo m&oacute;vel &eacute; processado ou exibido no navegador ou dispositivo de um usu&aacute;rio.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">12. Voc&ecirc; n&atilde;o vai usar o site ou aplicativo m&oacute;vel Se voc&ecirc; foi cometeu algum crime de natureza sexual.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">LOGIN ATRAV&Eacute;S DE PERFIS DE MEDIA SOCIAL OU SITE DE TERCEIROS</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast poder&aacute; oferecer a oportunidade para acessar nosso aplicativo atrav&eacute;s de perf&iacute;s de<span style="margin: 0px;">&nbsp; </span>m&iacute;dias sociais e outros sites com credenciais de login &uacute;nico. Voc&ecirc; concorda e entende que Broodcast pode obter informa&ccedil;&otilde;es pessoais adicionais de perfis de terceiros. Informa&ccedil;&atilde;o em seu perfil incluir&aacute; informa&ccedil;&otilde;es e conte&uacute;do que voc&ecirc; fornecer e / ou fazer upload, bem como informa&ccedil;&otilde;es que coletamos de sua conta de sites em redes sociais.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">DIREITOS PARA ALTERAR WEBSITES E CONTE&Uacute;DOS DO APLICATIVO M&Oacute;VEL</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">O site e aplicativo m&oacute;vel ser&atilde;o atualizados &agrave; medida que mudan&ccedil;a forem identificadas como necess&aacute;rias ao nossos produtos. Broodcast n&atilde;o garante que o conte&uacute;do fornecido por meio do site ou aplicativo m&oacute;vel permanecer&aacute; dispon&iacute;vel ao p&uacute;blico permanentemente. Broodcast tamb&eacute;m pode atualizar ou alterar o layout, design, ou links dentro do site e aplicativo m&oacute;vel sempre que necess&aacute;rio.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">LINKS PARA SITES DE TERCEIROS</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast pode conectar-se a sites de terceiros atrav&eacute;s do Website ou aplicativos m&oacute;veis. Broodcast n&atilde;o garante que os sites existentes nesses links fornecem conte&uacute;do exato ou completo. Links fornecidos atrav&eacute;s do Website ou aplicativo m&oacute;vel, n&atilde;o criar um relacionamento de endosso ou uma afilia&ccedil;&atilde;o com Broodcast. Broodcast reserva-se o direito de remover estes links de terceiros a qualquer momento. Por favor, revise os termos de uso ou de privacidade desses sites para seus direitos e restri&ccedil;&otilde;es.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">TRADU&Ccedil;&Atilde;O DO TERMO DE USO</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast poder&aacute; fornecer uma tradu&ccedil;&atilde;o da vers&atilde;o em Ingl&ecirc;s dos Termos para outros idiomas. Voc&ecirc; compreende e concorda que qualquer tradu&ccedil;&atilde;o dos Termos de uso para outras l&iacute;nguas &eacute; apenas para sua conveni&ecirc;ncia e que a vers&atilde;o em Ingl&ecirc;s reger&aacute; sobre seu relacionamento com Broodcast. Al&eacute;m disso, se houver alguma inconsist&ecirc;ncia entre a vers&atilde;o em Ingl&ecirc;s dos Termos e sua vers&atilde;o traduzida, a vers&atilde;o em Ingl&ecirc;s dos Termos dever&aacute; prevalecer sobre os outros.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">PROPAGANDA</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Alguns dos servi&ccedil;os dentro do aplicativo M&oacute;vel e Website s&atilde;o mantidos por receita proveniente de publicidade e podem exibir an&uacute;ncios e promo&ccedil;&otilde;es. Estes an&uacute;ncios podem ser destinados ao conte&uacute;do de informa&ccedil;&atilde;o armazenada no Website, Aplicativo m&oacute;vel e consultas feitas atrav&eacute;s do site ou aplicativo m&oacute;vel ou outra informa&ccedil;&atilde;o fornecida pelo usu&aacute;rio. A maneira, modo e abrang&ecirc;ncia da publicidade em nosso aplicativo est&atilde;o sujeitas a altera&ccedil;&otilde;es sem aviso pr&eacute;vio espec&iacute;fico ao usu&aacute;rio. Em considera&ccedil;&atilde;o para concess&atilde;o do acesso e utiliza&ccedil;&atilde;o dos servi&ccedil;os, voc&ecirc; concorda que Broodcast colocar tais an&uacute;ncios no site ou aplicativo m&oacute;vel</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">USO DE PROPRIEDADE INTELECTUAL DA BROODCAST</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Salvo indica&ccedil;&atilde;o em contr&aacute;rio, o site, aplicativo m&oacute;vel e todos os materiais no site e aplicativo m&oacute;vel, incluindo textos, imagens, ilustra&ccedil;&otilde;es, desenhos, &iacute;cones, fotografias, clipes de v&iacute;deo e outros materiais, e os direitos autorais, marcas, ou outra propriedade intelectuais, tais como materiais (coletivamente, "Conte&uacute;do"), s&atilde;o de propriedade, controladas ou licenciadas pela Broodcast e outras marcas que aparecem no site s&atilde;o marcas comerciais de Broodcast suas afiliadas.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">O site e aplicativo m&oacute;vel e os conte&uacute;dos s&atilde;o destinados exclusivamente para uso pessoal e n&atilde;o-comercial. Voc&ecirc; pode baixar ou copiar o conte&uacute;do e outros materiais para download exibidos no site para seu uso pessoal somente. Nenhum direito, t&iacute;tulo ou interesse em qualquer conte&uacute;do baixado &eacute; transferido para voc&ecirc; como resultado de qualquer download ou c&oacute;pia. Voc&ecirc; n&atilde;o pode reproduzir (exceto conforme mencionado acima), publicar, transmitir, distribuir, exibir, modificar, criar trabalhos derivados, vender ou explorar de qualquer forma qualquer um dos conte&uacute;dos ou o site ou aplicativo m&oacute;vel.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">CONTE&Uacute;DO</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Ao enviar conte&uacute;do, inclu&iacute;do mas n&atilde;o limitado a texto, gr&aacute;ficos, imagens, "o seu conte&uacute;do", atrav&eacute;s do site ou aplicativo m&oacute;vel. Voc&ecirc; irrevogavelmente concede-nos uma licen&ccedil;a perp&eacute;tua, irrevog&aacute;vel, mundial, n&atilde;o-exclusiva, livre de royalties , sub-licenci&aacute;vel, transfer&iacute;vel e direito de usar o seu conte&uacute;do (incluindo conte&uacute;do compartilhado por qualquer usu&aacute;rio de perfis de empresas com acesso a p&aacute;gina de perfil de empresas para ger&ecirc;nciamento) e todos os direitos de propriedade intelectual para qualquer prop&oacute;sito, incluindo parcerias com API de terceiros e em qualquer m&iacute;dia existente agora ou no futuro. Por "utiliza&ccedil;&atilde;o" queremos dizer usar, copiar, exibir, distribuir, modificar, traduzir, reformatar, incorporar em an&uacute;ncios e outras obras, promover, criar trabalhos derivados, e, no caso de servi&ccedil;os de terceiros, permitir que seus usu&aacute;rios e outros a fazerem o mesmo. Voc&ecirc; nos concede o direito de usar o nome ou o nome de usu&aacute;rio para o perfil que voc&ecirc; usou para enviar seu conte&uacute;do. Voc&ecirc; renuncia irrevogavelmente, e faz com que seja dispensada, todas as reivindica&ccedil;&otilde;es e afirma&ccedil;&otilde;es de direitos morais ou atribui&ccedil;&atilde;o em rela&ccedil;&atilde;o ao seu conte&uacute;do movida contra n&oacute;s, quaisquer servi&ccedil;os de terceiros e os nossos e os seus utilizadores.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">REPRESENTA&Ccedil;&Atilde;O RELATIVAS A UTILIZA&Ccedil;&Atilde;O DO CONTE&Uacute;DO</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Voc&ecirc; &eacute; respons&aacute;vel por seu conte&uacute;do. Voc&ecirc; representa e garante que voc&ecirc; &eacute; o &uacute;nico autor ou de outra forma controla todos os direitos do seu conte&uacute;do ou que tenham sido concedida a permiss&atilde;o expl&iacute;cita do detentor dos direitos de apresentar o seu conte&uacute;do; Seu conte&uacute;do n&atilde;o foi copiado de ou com base no todo ou em parte, em qualquer outro conte&uacute;do, o trabalho, ou o site; Seu conte&uacute;do n&atilde;o foi submetida atrav&eacute;s do uso de qualquer processo automatizado, como um bot; O uso de seu conte&uacute;do por n&oacute;s, ou por de terceiros,<span style="margin: 0px;">&nbsp; </span>n&atilde;o violar ou infringir quaisquer direitos de seu ou de outros; Seu conte&uacute;do &eacute; verdadeiro e preciso; e seu conte&uacute;do n&atilde;o viola os Termos ou qualquer lei aplic&aacute;vel. Se o seu conte&uacute;do &eacute; uma avalia&ccedil;&atilde;o, voc&ecirc; declara e garante que voc&ecirc; &eacute; o &uacute;nico autor desta avalia&ccedil;&atilde;o; a avalia&ccedil;&atilde;o reflete uma experi&ecirc;ncia real que voc&ecirc; teve; n&atilde;o foram pagos ou n&atilde;o remunerados em conex&atilde;o com sua cria&ccedil;&atilde;o ou destacamento da avalia&ccedil;&atilde;o; e voc&ecirc; n&atilde;o tinha incentivo pessoal financeira, competitivo, ou outra ao autor ou postar um coment&aacute;rio que n&atilde;o era uma express&atilde;o justa de sua opini&atilde;o honesta.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Voc&ecirc; assume todos os riscos associados com o seu conte&uacute;do, incluindo depend&ecirc;ncia de ningu&eacute;m sobre a sua qualidade, precis&atilde;o ou confiabilidade ou qualquer divulga&ccedil;&atilde;o por voc&ecirc; de informa&ccedil;&otilde;es em seu conte&uacute;do que o faz pessoalmente identific&aacute;veis. Enquanto n&oacute;s nos reservamos o direito de remover conte&uacute;do, n&oacute;s n&atilde;o controlamos as a&ccedil;&otilde;es ou conte&uacute;dos postados por nossos usu&aacute;rios e n&atilde;o garantimos a exatid&atilde;o, integridade ou qualidade de qualquer conte&uacute;do. Voc&ecirc; reconhece e concorda que o conte&uacute;do publicado pelos usu&aacute;rios e toda e qualquer responsabilidade decorrentes de tal conte&uacute;do &eacute; da exclusiva responsabilidade do usu&aacute;rio que publicou o conte&uacute;do, e n&atilde;o n&oacute;s.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">AVALIA&Ccedil;&Otilde;ES DE USU&Aacute;RIOS</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Usu&aacute;rios Broodcast podem avaliar lugares, e outros usu&aacute;rios uma vez que se encontrem em pessoa ap&oacute;s combinado usando o aplicativo m&oacute;vel. Avalia&ccedil;&otilde;es de usu&aacute;rio n&atilde;o refletem a opini&atilde;o da Broodcast. Broodcast recebe v&aacute;rias avalia&ccedil;&otilde;es de usu&aacute;rios, que refletem as opini&otilde;es dos usu&aacute;rios. &Eacute; pertinente afirmar que todo e qualquer coment&aacute;rio publicado no Broodcast &eacute; a opini&atilde;o pessoal dos usu&aacute;rios. Broodcast &eacute; uma plataforma neutra, que fornece apenas um meio de comunica&ccedil;&atilde;o entre os usu&aacute;rios / colaboradores, incluindo os usu&aacute;rios ou donos de empresas / representantes com acesso a p&aacute;ginas de perfil de empresas.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Se um representante ou dono de uma perfil de empresa acredita que a avalia&ccedil;&atilde;o de qualquer usu&aacute;rio, viola os Termos de Broodcast de Uso ou Pol&iacute;tica de Privacidade, um usu&aacute;rio do perfil<span style="margin: 0px;">&nbsp; </span>pode sinalizar a revis&atilde;o &agrave; nossa aten&ccedil;&atilde;o. Broodcast pode remover o coment&aacute;rio em seu exclusivo crit&eacute;rio, se a revis&atilde;o &eacute; uma viola&ccedil;&atilde;o dos Termos, ou diretrizes de conte&uacute;do e das pol&iacute;ticas ou de outra forma prejudicial para os Servi&ccedil;os.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Se um usu&aacute;rio que foi revisado por outro usu&aacute;rio acredita que o conte&uacute;do &eacute; falso, ofensivo ou impr&oacute;prio e representam uma viola&ccedil;&atilde;o das pol&iacute;ticas do Broodcast, o usu&aacute;rio revisada pode sinalizar a revis&atilde;o para nossa aten&ccedil;&atilde;o. </span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">LIMITA&Ccedil;&Atilde;O DE RESPONSABILIDADE</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Voc&ecirc; concorda em usar os dados apresentados por Broodcast (dispon&iacute;veis por meio do aplicativo m&oacute;vel e Website ou atrav&eacute;s de qualquer outro meio, como API, etc.) apenas para uso / fins pessoais e n&atilde;o comercial (Com exce&ccedil;&atilde;o ao usu&aacute;rios de perf&iacute;s de empresas ) a menos que acordado por / com Broodcast, por escrito, atrav&eacute;s de um acordo separado.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">O aplicativo m&oacute;vel e Website s&atilde;o destinados ao uso pessoal. Voc&ecirc; concorda em defender, indemnizar e isentar Broodcast e suas subsidi&aacute;rias, agentes, licenciadores, gerentes e outras empresas afiliadas e seus empregados, contratados, agentes, executivos e diretores, de e contra todas e quaisquer reivindica&ccedil;&otilde;es, danos, obriga&ccedil;&otilde;es, perdas , passivos, custos ou d&iacute;vidas, e despesas (incluindo mas n&atilde;o limitado a honor&aacute;rios advocat&iacute;cios) oriundos de: (i) seu uso e acesso ao website e mobile Application incluindo quaisquer dados ou conte&uacute;do transmitidos ou recebidos por voc&ecirc;; (ii) viola&ccedil;&atilde;o de qualquer termo dos Termos de Uso ou Pol&iacute;tica de Privacidade (Acordos), incluindo, sem limita&ccedil;&atilde;o, a sua viola&ccedil;&atilde;o de qualquer das declara&ccedil;&otilde;es e garantias feitas nestes acordos; (iii) viola&ccedil;&atilde;o de qualquer direito de terceiros, incluindo, sem limita&ccedil;&atilde;o, qualquer direito de privacidade ou direitos de propriedade intelectual; (iv) viola&ccedil;&atilde;o de qualquer lei, norma ou regulamento; (V) qualquer reclama&ccedil;&atilde;o ou danos que surgem como resultado de algum do seu Conte&uacute;do do Usu&aacute;rio ou qualquer outra que &eacute; enviada por sua conta; ou (vi) acesso e uso do site ou aplicativo m&oacute;vel com seu nome de usu&aacute;rio, senha ou outro c&oacute;digo de seguran&ccedil;a apropriado em qualquer outra parte.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">O Servi&ccedil;o e qualquer produto que voc&ecirc; recebe atrav&eacute;s do site ou aplicativo m&oacute;vel S&Atilde;O FORNECIDOS "COMO EST&Aacute;" E "COMO DISPON&Iacute;VEL". USO DA APLICA&Ccedil;&Atilde;O M&Oacute;VEL E SITE &Eacute; POR SUA CONTA E RISCO. AT&Eacute; AO LIMITE M&Aacute;XIMO PERMITIDO PELA LEI APLIC&Aacute;VEL, O SERVI&Ccedil;O E OS PRODUTOS S&Atilde;O FORNECIDOS SEM GARANTIAS DE QUALQUER TIPO, EXPRESSA OU IMPL&Iacute;CITA, INCLUINDO, SEM LIMITA&Ccedil;&Atilde;O, GARANTIAS DE COMERCIALIZA&Ccedil;&Atilde;O, ADEQUA&Ccedil;&Atilde;O A UM DETERMINADO FIM, OU N&Atilde;O-VIOLA&Ccedil;&Atilde;O. SEM LIMITAR O PRECEDENTE, BROODCAST, suas subsidi&aacute;rias, E SEUS AGENTES N&Atilde;O GARANTE QUE O conte&uacute;do &eacute; preciso e confi&aacute;vel ou corrigido; QUE O SERVI&Ccedil;O OU OS PRODUTOS ATENDER&Atilde;O &Agrave;S SUAS NECESSIDADES; QUE O SERVI&Ccedil;O ESTAR&Aacute; DISPON&Iacute;VEL EM QUALQUER MOMENTO OU LOCAL PARTICULAR, ininterrupto ou seguro; QUE quaisquer defeitos ou erros sejam corrigidos; OU QUE O SITE EST&Aacute; LIVRE DE V&Iacute;RUS OU DE OUTROS ELEMENTOS NOCIVOS. QUALQUER CONTE&Uacute;DO BAIXADO OU OBTIDO ATRAV&Eacute;S DO USO DO SERVI&Ccedil;O &Eacute; TRANSFERIDO POR SUA CONTA E RISCO E VOC&Ecirc; SER&Aacute; O &Uacute;NICO RESPONS&Aacute;VEL POR QUAISQUER DANOS AO SEU SISTEMA DE COMPUTADOR OU PERDA DE DADOS RESULTANTE DE TAL TRANSFER&Ecirc;NCIA OU SEU USO DO SERVI&Ccedil;O.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">ENTRE VOC&Ecirc; E FORNECEDORES DE PRODUTOS OU SERVI&Ccedil;OS DE TERCEIROS.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">AT&Eacute; AO LIMITE M&Aacute;XIMO PERMITIDO PELA LEI APLIC&Aacute;VEL, EM NENHUM CASO A BROODCAST, suas afiliadas, agentes, diretores, empregados, fornecedores ou licenciadores SER&Aacute; RESPONS&Aacute;VEL POR QUAISQUER DANOS DIRETOS, PUNITIVOS, INCIDENTAIS, INDIRETOS, ESPECIAIS, CONSEQUENCIAIS OU EXEMPLARES, INCLUINDO, SEM LIMITA&Ccedil;&Atilde;O DANOS POR PERDA DE LUCROS, USO, DADOS OU OUTRAS PERDAS INTANG&Iacute;VEIS, QUE RESULTADO DO USO, OU INCAPACIDADE DE USO DESTE SITE OU aplica&ccedil;&atilde;o m&oacute;vel. EM NENHUM CASO SER&Aacute; BROODCAST RESPONS&Aacute;VEL POR QUAISQUER DANOS, perdas ou danos resultantes de cortar, adultera&ccedil;&atilde;o ou outro acesso n&atilde;o autorizado ou USO DO SERVI&Ccedil;O OU sua conta ou as informa&ccedil;&otilde;es neles contidas.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">AT&Eacute; AO LIMITE M&Aacute;XIMO PERMITIDO PELA LEI APLIC&Aacute;VEL, BROODCAST N&Atilde;O ASSUME RESPONSABILIDADE POR QUAISQUER (I) erros, equ&iacute;vocos, OU IMPRECIS&Otilde;ES de conte&uacute;dos dispon&iacute;veis no ou atrav&eacute;s do aplicativo m&oacute;vel ou WEBSITR; (II) DANOS PESSOAIS OU DANOS MATERIAIS, DE QUALQUER NATUREZA, RESULTANTE DO ACESSO OU USO DE NOSSO SITE, servi&ccedil;o de associa&ccedil;&atilde;o OU QUALQUER PRODUTO RECEBIDO EM NOSSO SERVI&Ccedil;O; (III) QUALQUER ACESSO OU USO DE NOSSOS SERVIDORES SEGUROS E / OU TODA E QUALQUER informa&ccedil;&otilde;es pessoais armazenadas no seu interior; (IV) QUALQUER INTERRUP&Ccedil;&Atilde;O OU CESSA&Ccedil;&Atilde;O DE TRANSMISS&Atilde;O DE OU DO SERVI&Ccedil;O; (V) quaisquer erros, v&iacute;rus, cavalos de Tr&oacute;ia, OU AFINS QUE POSSAM SER TRANSMITIDO PARA OU ATRAV&Eacute;S DO NOSSO SERVI&Ccedil;O POR QUALQUER TERCEIRO; (VI) QUALQUER ERRO OU OMISS&Atilde;O EM QUALQUER CONTE&Uacute;DO OU QUALQUER PERDA OU DANO SOFRIDO COMO RESULTADO DO USO DE QUALQUER CONTE&Uacute;DO POSTADO, TRANSMITIDO OU DE OUTRA FORMA DISPONIBILIZADO atrav&eacute;s do site ou aplica&ccedil;&atilde;o m&oacute;vel; E / OU (VII) CONTE&Uacute;DO usu&aacute;rio ou o difamat&oacute;rio, ofensivo ou ILEGAL DE TERCEIROS.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">REMO&Ccedil;&Atilde;O DE CONTE&Uacute;DO &amp; SUSPENS&Atilde;O DE CONTA</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Reservamo-nos o direito de, a qualquer momento e sem aviso pr&eacute;vio, remover, bloquear ou desabilitar o acesso a qualquer conte&uacute;do que, por qualquer raz&atilde;o ou sem raz&atilde;o, consideramos ser censur&aacute;vel, em viola&ccedil;&atilde;o dos Termos de Uso ou Pol&iacute;tica de Privacidade ou de outra forma prejudicial para nossos usu&aacute;rios. Sujeito &agrave;s exig&ecirc;ncias da lei aplic&aacute;vel, n&oacute;s n&atilde;o somos obrigados a devolver qualquer parte do conte&uacute;do para voc&ecirc; sob quaisquer circunst&acirc;ncias. Qualquer conte&uacute;do, que &eacute; depreciativo, difamat&oacute;rio ou de &oacute;dio e sem qualquer evid&ecirc;ncia substancial podem ser removidos a nosso crit&eacute;rio.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast reserva-se o direito, a seu exclusivo crit&eacute;rio, suspender ou encerrar sua conta e recusar todo e qualquer uso atual ou futuro do Site ou Servi&ccedil;os (ou qualquer parte dele) a qualquer momento por qualquer motivo. Voc&ecirc; concorda que Broodcast n&atilde;o ser&aacute; responsabilizada por voc&ecirc; ou terceiros, por qualquer suspens&atilde;o ou encerramento de sua conta ou qualquer recusa de qualquer uso do site ou aplicativo m&oacute;vel (ou qualquer parte dele).</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">ENTREGA DE INFORMA&Ccedil;&Otilde;ES CONFIDENTAL PELO USU&Aacute;RIO</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast desencoraja os usu&aacute;rios de enviar quaisquer informa&ccedil;&otilde;es confidenciais ou propriet&aacute;rias atrav&eacute;s do site ou aplicativo m&oacute;vel. Qualquer informa&ccedil;&atilde;o, materiais, sugest&otilde;es, id&eacute;ias ou coment&aacute;rios enviados para Broodcast ser&aacute; considerada n&atilde;o confidencial e ao submet&ecirc;-lo, voc&ecirc; est&aacute; dando Broodcast o direito absoluto de utilizar, modificar, reproduzir, transmitir, exibir e distribu&iacute;-lo para qualquer fim, sem pagamento ou outra compensa&ccedil;&atilde;o para voc&ecirc;.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">LEI DE DIREITOS AUTORAIS DO MIL&Eacute;NIO DIGITAL PARA REMO&Ccedil;&Atilde;O DE CONTE&Uacute;DO </span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Se voc&ecirc; acredita que qualquer conte&uacute;do que aparecem no site ou aplicativo m&oacute;vel viola seus direitos autorais, queremos ouvir de voc&ecirc;. Por favor, envie a seguinte informa&ccedil;&atilde;o por escrito ao Agente de Direitos Autorais no endere&ccedil;o abaixo:</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(A) o seu nome, endere&ccedil;o, n&uacute;mero de telefone e endere&ccedil;o de e-mail;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(B) uma descri&ccedil;&atilde;o do trabalho com direitos autorais que voc&ecirc; alega ter sido violado;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(C) o URL exata ou uma descri&ccedil;&atilde;o de cada lugar onde material em viola&ccedil;&atilde;o est&aacute; localizado;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(D) uma declara&ccedil;&atilde;o sua de que voc&ecirc; tem uma cren&ccedil;a de boa f&eacute; que o uso contestado n&atilde;o foi autorizado por voc&ecirc;, seu agente, ou pela lei;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(E) sua assinatura eletr&ocirc;nica ou f&iacute;sica ou a assinatura eletr&ocirc;nica ou f&iacute;sica da pessoa autorizada a agir em seu nome; e</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">(F) uma declara&ccedil;&atilde;o sua feita sob pena de perj&uacute;rio, que as informa&ccedil;&otilde;es em sua notifica&ccedil;&atilde;o &eacute; precisa, que voc&ecirc; &eacute; o propriet&aacute;rio dos direitos autorais ou autorizado a agir em nome do propriet&aacute;rio dos direitos autorais.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">agente de Direitos Autorais</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast, Inc.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">1911 Martin Luther King Jr Way</span></p>
                         <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Berkeley CA 94704</span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Email: contact@broodcast.com</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Broodcast procura preservar todas e quaisquer isen&ccedil;&otilde;es de responsabilidade que podem estar dispon&iacute;veis sob a lei de direitos autorais, mas n&atilde;o estipula necessariamente que &eacute; um prestador de servi&ccedil;os conforme definido na se&ccedil;&atilde;o USC 512 (c) ou em outro lugar</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">COMENT&Aacute;RIOS &amp; FEEDBACK</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Em conformidade com os seus direitos ao abrigo do C&oacute;digo Civil da Calif&oacute;rnia 1789.3, voc&ecirc; tem o direito de contactar Broodcast com quaisquer queixas ou para pedir informa&ccedil;&otilde;es complementares. Voc&ecirc; pode enviar e-mail Broodcast em contact@broodcast.com. Voc&ecirc; tamb&eacute;m pode ligar para +1(415) -250-5154. Para quaisquer documentos f&iacute;sicos, voc&ecirc; pode enviar e-mails<span style="margin: 0px;">&nbsp; </span>para: </span></span></p>
                         <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast, inc</span></p>
                         <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">1911 Martin Luther King Jr Way</span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Berkeley CA 94704</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Se os usu&aacute;rios Calif&oacute;rnia tiver d&uacute;vidas ou reclama&ccedil;&otilde;es sobre Broodcast, eles tamb&eacute;m podem entrar em contato com a Unidade de queixa Assist&ecirc;ncia da Divis&atilde;o de Servi&ccedil;os ao Consumidor do Departamento de Assuntos do Consumidor da Calif&oacute;rnia atrav&eacute;s da escrita em 1625 North Market Blvd., Sacramento, CA 95834, ou pelo telefone +1(916) 445-1254 ou +1(800) 952-5210.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">ARBITRAGEM</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">Ao visitar o site ou a aceder a aplica&ccedil;&atilde;o m&oacute;vel que voc&ecirc; concorda que qualquer disputa, reclama&ccedil;&atilde;o ou controv&eacute;rsia decorrente ou relacionada a estes Termos ou a viola&ccedil;&atilde;o, rescis&atilde;o, aplica&ccedil;&atilde;o, interpreta&ccedil;&atilde;o ou validade ou a utiliza&ccedil;&atilde;o dos Servi&ccedil;os (coletivamente, "Controv&eacute;rsias") ser&aacute; resolvida por arbitragem entre voc&ecirc; e Broodcast vinculativo, excepto o direito de procurar medida cautelar ou outra em um tribunal de jurisdi&ccedil;&atilde;o competente para impedir que o real ou de amea&ccedil;a de contrafac&ccedil;&atilde;o, desvio ou viola&ccedil;&atilde;o de direitos autorais, marcas comerciais, segredos comerciais, patentes ou de um partido outros direitos de propriedade intelectual. Voc&ecirc; reconhece e concorda que voc&ecirc; e Broodcast s&atilde;o cada ren&uacute;ncia ao direito a um julgamento por j&uacute;ri ou para participar como autor ou classe em qualquer a&ccedil;&atilde;o de classe suposta ou processo representativo. Al&eacute;m disso, a menos que voc&ecirc; e Broodcast acordo em contr&aacute;rio por escrito, o &aacute;rbitro n&atilde;o poder&aacute; consolidar mais de um reivindica&ccedil;&otilde;es da pessoa, e n&atilde;o podem de outra maneira presidir qualquer forma de qualquer classe ou processo representativo.</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">REGRAS DE ARBITRAGEM E LEGISLA&Ccedil;&Atilde;O APLIC&Aacute;VEL</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                         <p style="margin: 0px 0px 11px;"><span lang="PT-BR" style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">A arbitragem ser&aacute; administrada pela Associa&ccedil;&atilde;o Americana de Arbitragem ( "AAA") em conformidade com as Regras de Arbitragem Comercial e os Procedimentos Suplementares para o consumidor relacionadas Disputas (as "Regras AAA") em vigor, exceto conforme modificado por este "Resolu&ccedil;&atilde;o de Conflitos" se&ccedil;&atilde;o. (Regras de AAA est&atilde;o dispon&iacute;veis em www.adr.org/arb_med ou ligando para o AAA em 1-800-778-7879). A Lei de Arbitragem Federal ir&aacute; reger a interpreta&ccedil;&atilde;o e aplica&ccedil;&atilde;o da presente sec&ccedil;&atilde;o.</span></span></p>
                       </div>
                   </div>
                   <div id="en" v-else>
                       <div>
                           <p style="margin: 0px 0px 11px;"><span style="margin: 0px; line-height: 107%; font-size: 14pt;">Broodcast Terms of Use</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">This Website and the Mobile Application are owned and operated by Broodcast, Inc, a Delaware Corporation, located in California (&ldquo;Broodcast&rdquo;). In this Terms of Use, the user may be referred to as &ldquo;you&rdquo; and Broodcast may be referred to as &ldquo;us&rdquo;, &ldquo;we&rdquo;, or &ldquo;our.&rdquo;<span style="margin: 0px;">&nbsp; </span>By using or accessing the Broodcast Website or Mobile Application, you agree to these Terms of Use and the Privacy Policy. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">This Terms of Use are effective for all existing and future Broodcast user accounts including but without limitation to users having access to &lsquo;business profile&rsquo; to manage their claimed business listings.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">TERMS OF CREATING AN ACCOUNT &amp; WEBSITE ACCESS</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">1. You must be at least 18 years old to use the Broodcast Website or Mobile Application. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">2. You may not post violent, nude, partially nude, discriminatory, unlawful, infringing, hateful, pornographic or sexually suggestive photos or other content via the Mobile Application. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri;"><span style="font-size: medium;">3. You are responsible for any activity that occurs through your account and you agree you will not sell, transfer, license or assign your account, followers, username, or any account rights.<span style="margin: 0px;">&nbsp; </span></span></span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">4. Broodcast prohibits the creation of and you agree that you will not create an account for anyone other than yourself or your business. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">5. You represent that all information you provide or provided to Broodcast upon registration and at all other times will be true, accurate, current and complete and you agree to update your information as necessary to maintain its truth and accuracy.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">6. You agree that you will not solicit, collect or use the login credentials of other Broodcast users.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">7.<span style="margin: 0px;">&nbsp; </span>You are responsible for keeping your password secret and secure.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">8. You will not spam, defame, stalk, bully, abuse, harass, threaten, impersonate or intimidate people or entities and you must not post private or confidential information via the Website or Mobile Application including, without limitation, your or any other person's credit card information, social security or alternate national identity numbers, non-public phone numbers or non-public email addresses.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">9. You are solely responsible for your conduct and any data, text, files, information, usernames, images, graphics, photos, profiles, audio and video clips, sounds, musical works, works of authorship, applications, links and other content or materials (collectively, "Content") that you submit, post or display on or via the Website or Mobile Application.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">10. You may not use the Mobile Application or Website for any illegal or unauthorized purpose. You agree to comply with all laws, rules and regulations applicable to your use of the Website and Mobile Application and your Content, including but not limited to, copyright laws.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">11. You will not interfere or disrupt the services of the Website or Mobile Application or servers or networks connected to the Website or Mobile Application, including by transmitting any worms, viruses, spyware, malware or any other code of a destructive or disruptive nature. You may not inject content or code or otherwise alter or interfere with the way any the Website or Mobile Application is rendered or displayed in a user's browser or device.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">12.<span style="margin: 0px;">&nbsp; </span>You will not use the Website or Mobile Application if you are convicted sex offender. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">LOGIN THROUGH SOCIAL MEDIA &amp; THIRD PARTY SITES</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast may offer the opportunity to login to Broodcast accounts through third-party social media and other websites with unique login credentials. You agree and understand that Broodcast may gain additional personal information from your third-party website profiles Information on your profile will include information and content you provide and/or upload as well as information we collect from your account with social networking sites.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">RIGHT TO CHANGE WEBSITE AND MOBILE APPLICATION CONTENT </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">The Website and Mobile Application will be updated as product offerings change, or as the communication needs or desired of Broodcast develop. Broodcast makes no guarantees that content provided through the Website or Mobile Application will remain available to the public through the Website. Broodcast may also update or alter the layout, designs, or links within the Website and Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">LINKS TO THIRD PARTY WEBSITES</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast may link to third party websites through the Website or Mobile Applications. Broodcast makes no guarantees that the websites featured on these links provide accurate or complete content. Links provided through the Website or Mobile Applicationdo not create an endorsement relationship or an affiliation with Broodcast. Broodcast reserves the right to remove these third party links at any time. Please review the terms of use or privacy policies of these websites for rights and restrictions.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">ADVERTISING</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Some of the services within the Mobile Application and Website are supported by advertising revenue and may display advertisements and promotions. These advertisements may be targeted to the content of information stored on the Website and Mobile Application and queries made through the Website or Mobile Application or other information given by the user. The manner, mode and extent of advertising by Broodcast on are subject to change without specific notice to you. In consideration for Broodcast granting you access to and use of the services, you agree that Broodcast may place such advertising on the Website or Mobile Application</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">USE OF BROODCAST INTELLECTUAL PROPERTY</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Unless otherwise noted, the Website, Mobile Application and all materials on the Website and Mobile Application including text, images, illustrations, designs, icons, photographs, video clips and other materials, and the copyrights, trademarks, trade dress and/or other intellectual property in such materials (collectively, the &ldquo;Contents&rdquo;), are owned, controlled or licensed by Broodcast and other trademarks appearing on the Website are the trademarks of Broodcast its affiliates.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">The Website and Mobile Application and the contents are intended solely for personal, non-commercial use. You may download or copy the contents and other downloadable materials displayed on the Website for your personal use only. No right, title or interest in any downloaded content is transferred to you as a result of any such downloading or copying. You may not reproduce (except as noted above), publish, transmit, distribute, display, modify, create derivative works from, sell or exploit in any way any of the contents or the Website or Mobile Application. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">CONTENT</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">By submitting content, included though not limited to text, graphics, images, &ldquo;Your Content&rdquo;, through the API, Website, or Mobile Application you hereby irrevocably grant us a perpetual, irrevocable, world-wide, non-exclusive, royalty-free, sub-licensable and transferable license and right to use Your Content (including content shared by any business user having access to a &lsquo;business page&rsquo; to manage claimed business listings or otherwise) and all intellectual property rights therein for any purpose including API partnerships with third parties and in any media existing now or in future. By &ldquo;use&rdquo; we mean use, copy, display, distribute, modify, translate, reformat, incorporate into advertisements and other works, promote, create derivative works, and in the case of third party services, allow their users and others to do the same. You grant us the right to use the name or username for the profile you used to submit Your Content. You irrevocably waive, and cause to be waived, any claims and assertions of moral rights or attribution with respect to Your Content brought against us, any third party services and our and their users.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">REPREPREENTATIONS REGARDING YOUR USE OF THE CONTENT</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">You are responsible for Your Content. You represent and warrant that you are the sole author of, own, or otherwise control all of the rights of Your Content or have been granted explicit permission from the rights holder to submit Your Content; Your Content was not copied from or based in whole or in part on any other content, work, or website; Your Content was not submitted via the use of any automated process such as a script bot; use of Your Content by us, third party services, and our and their third party users will not violate or infringe any rights of yours or any third party; Your Content is truthful and accurate; and Your Content does not violate the Terms or any applicable laws. If Your Content is a review, you represent and warrant that you are the sole author of that review; the review reflects an actual experience that you had; you were not paid or otherwise remunerated in connection with your authoring or posting of the review; and you had no financial, competitive, or other personal incentive to author or post a review that was not a fair expression of your honest opinion.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">You assume all risks associated with Your Content, including anyone's reliance on its quality, accuracy, or reliability, or any disclosure by you of information in Your Content that makes you personally identifiable. While we reserve the right to remove content, we do not control actions or content posted by our users and do not guarantee the accuracy, integrity or quality of any content. You acknowledge and agree that content posted by users and any and all liability arising from such content is the sole responsibility of the user who posted the content, and not us.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">USER REVIEWS</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast users can review places, and after a meet up, they are also allowed to review users they met. Reviews of places are publicly available after submission by a User. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Reviews of a User are publicly visible only after the User being reviewed had approved the review.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">User reviews do not reflect the opinion of Broodcast. Broodcast receives multiple reviews by users, which reflect the opinions of the Users. It is pertinent to state that each and every review posted on Broodcast is the personal opinion of the user/reviewer only. Broodcast is a neutral platform, which solely provides a means of communication between users/reviewers including users or business owners/representatives with access to profile pages. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri;"><span style="font-size: medium;"><span style="margin: 0px;">&nbsp;</span>If a business representative believes that any particular user&rsquo;s review violates Broodcast&rsquo;s Terms of Use or Privacy Policy, a business user can flag the review to our attention. Broodcast may remove the review in its sole discretion if review is in violation of the Terms,or content guidelines and policies or otherwise harmful to the Services.</span></span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">If a user who has been reviewed by other user believes that the content is untrue, offensive or inappropriate and represent a violation of Broodcast&rsquo;s Policies, the reviewed user can flag the review to our attention. Reviews of personal users can also be deleted by the user who was reviewed without permission of the reviewing user.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">LIMITATION OF LIABILITY </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">You agree to use the data presented by Broodcast (as available on the Website Mobile Application or through any other means like API etc.) only for personal use/purposes and not for any commercial use (other than in accordance with &lsquo;Claim Your Business Listing&rsquo; access) unless agreed to by/with Broodcast in writing through a separate agreement.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">The Broodcast Mobile Application and Website are intended for personal use. You agree to defend, indemnify and hold harmless Broodcast and its subsidiaries, agents, licensors, managers, and other affiliated companies, and their employees, contractors, agents, officers and directors, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney&rsquo;s fees) arising from: (i) your use of and access to the Website and Mobile Application including any data or content transmitted or received by you; (ii) your violation of any term of the Terms of Use or Privacy Policy (Agreements), including without limitation your breach of any of the representations and warranties you make in these Agreements; (iii) your violation of any third-party right, including without limitation any right of privacy or intellectual property rights; (iv) your violation of any applicable law, rule or regulation; (v) any claim or damages that arise as a result of any of your User Content or any that is submitted via your account; or (vi) any other party&rsquo;s access and use of the Website or Mobile Application with your username, password or other appropriate security code.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">THE SERVICE AND ANY PRODUCT YOU RECEIVE THROUGH THE WEBSITE OR MOBILE APPLICATION ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS. USE OF THE MOBILE APPLICATION AND WEBSITE IS AT YOUR OWN RISK. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE AND THE PRODUCTS ARE PROVIDED WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, BROODCAST, ITS SUBSIDIARIES, AND ITS LICENSORS DO NOT WARRANT THAT THE CONTENT IS ACCURATE, RELIABLE OR CORRECT; THAT THE SERVICE OR THE PRODUCTS WILL MEET YOUR REQUIREMENTS; THAT THE SERVICE WILL BE AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, UNINTERRUPTED OR SECURE; THAT ANY DEFECTS OR ERRORS WILL BE CORRECTED; OR THAT THE WEBSITE IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. ANY CONTENT DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE OF THE SERVICE IS DOWNLOADED AT YOUR OWN RISK AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR LOSS OF DATA THAT RESULTS FROM SUCH DOWNLOAD OR YOUR USE OF THE SERVICE.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BROODCAST, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THIS WEBSITE OR MOBILE APPLICATION. UNDER NO CIRCUMSTANCES WILL BROODCAST BE RESPONSIBLE FOR ANY DAMAGE, LOSS OR INJURY RESULTING FROM HACKING, TAMPERING OR OTHER UNAUTHORIZED ACCESS OR USE OF THE SERVICE OR YOUR ACCOUNT OR THE INFORMATION CONTAINED THEREIN.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, BROODCAST ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AVAILABLE ON OR THROUGH THE MOBILE APPLICATION OR WEBSITR; (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO OR USE OF OUR WEBSITE, MEMBERSHIP SERVICE OR ANY PRODUCT RECEIVED FROM OUR SERVICE; (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION STORED THEREIN; (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICE; (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE THAT MAY BE TRANSMITTED TO OR THROUGH OUR SERVICE BY ANY THIRD PARTY; (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE THROUGH THE WEBSITE OR MOBILE APPLICATION; AND/OR (VII) USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF ANY THIRD PARTY.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">CONTENT REMOVAL &amp; SUSPENSION OF ACCOUNT</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">We reserve the right, at any time and without prior notice, to remove, block, or disable access to any content that we, for any reason or no reason, consider to be objectionable, in violation of the Terms of Use or Privacy Policy or otherwise harmful to our users or Broodcast in our sole discretion. Subject to the requirements of applicable law, we are not obligated to return any of the content to you under any circumstances. Any Content, which is derogatory, defamatory or hateful and without any substantial evidence may be taken down at our sole discretion.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast reserves the right in its sole discretion to suspend or terminate your Account and refuse any and all current or future use of the Website or Services (or any portion thereof) at any time for any reason. You agree that Broodcast will not be liable to you or to any third party for any suspension or termination of your Account or any refusal of any use of the Website or Mobile Application (or any portion thereof).</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">DELIVERY OF CONFIDENTAL INFORMATION BY USER </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast discourages users from sending any confidential or proprietary information through the Website or Mobile Application. Any information, materials, suggestions, ideas or comments sent to Broodcast will be considered non-confidential, and by submitting it, you are giving Broodcast the absolute right to use, modify, reproduce, transmit, display and distribute it for any purpose whatsoever, with no payment or other compensation to you.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">DIGITAL MILLENNIUM COPYRIGHT ACT &amp; REQUESTS FOR CONTENT REMOVAL </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">If you believe that any content appearing on the Website or Mobile Application infringes your copyright rights, we want to hear from you. Please forward the following information in writing to the Copyright Agent at the address listed below:</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(a) your name, address, telephone number, and e-mail address;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(b) a description of the copyrighted work that you claim has been infringed;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(c) the exact URL or a description of each place where alleged infringing material is located;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(d) a statement by you that you have a good faith belief that the disputed use has not been authorized by you, your agent, or the law;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(e) your electronic or physical signature or the electronic or physical signature of the person authorized to act on your behalf; and</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">(f) a statement by you made under penalty of perjury, that the information in your notice is accurate, that you are the copyright owner or authorized to act on the copyright owner's behalf.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Copyright Agent</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast, Inc. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">1911 Martin Luther King Jr Way</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Berkeley CA 94704</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Email: contact@broodcast.com</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Broodcast seeks to preserve any and all exemptions from liability that may be available under the copyright law, but does not necessarily stipulate that it is a service provider as defined in USC section 512(c) or elsewhere</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">COMMENTS &amp; FEEDBACK</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="margin: 0px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">In compliance with your rights under California Civil Code 1789.3, you have the right to contact Broodcast with any complaints or to seek additional information. You may email Broodcast at contact@broodcast.com. You may also call(415)-250-5154. For any physical documents, you may send mail to1911 Martin Luther King Jr Way</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">Berkeley CA 94704</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">If California users have any questions or complaints about Broodcast, they may also contact The Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs through writing at 1625 North Market Blvd., Sacramento, CA 95834, or by telephone at (916) 445-1254 or (800) 952-5210.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">ARBITRATION</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">By visiting Website or accessing the Mobile Application you agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Services (collectively, "Disputes") will be settled by binding arbitration between you and Broodcast, except the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents or other intellectual property rights. You acknowledge and agree that you and Broodcast are each waiving the right to a trial by jury or to participate as a plaintiff or class in any purported class action or representative proceeding. Further, unless both you and Broodcast otherwise agree in writing, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of any class or representative proceeding. </span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">ARBITRATION RULES AND GOVERNING LAW</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">The arbitration will be administered by the American Arbitration Association ("AAA") in accordance with the Commercial Arbitration Rules and the Supplementary Procedures for Consumer Related Disputes (the "AAA Rules") then in effect, except as modified by this "Dispute Resolution" section. (The AAA Rules are available at www.adr.org/arb_med or by calling the AAA at 1-800-778-7879.) The Federal Arbitration Act will govern the interpretation and enforcement of this Section.</span></p>
                           <p style="margin: 0px 0px 11px;"><span style="font-family: Calibri; font-size: medium;">&nbsp;</span></p>
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
      locale: ''
    }
  },
  computed: {
    currentLocale(){
      return this.locale = this.$i18n.locale;
    }
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
    color:black;
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
