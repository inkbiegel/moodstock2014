<?php
  // redirect mobile + no css animation users to line up page
  require_once 'php/Mobile_Detect.php';
  $detect = new Mobile_Detect;
  if($detect->isMobile() && !$detect->isTablet() || preg_match("/MSIE [6-9]\.0|Opera Mini/",$_SERVER['HTTP_USER_AGENT'])){
    header("Location: http://www.moodstock.eu/line-up.html");
    die();
  }
?>
<!DOCTYPE html>
<!--[if IE 8]><html class="lt-ie9 ie8"><![endif]-->
<!--[if IE 9]><html class="lt-ie10 ie9"><![endif]-->
<!--[if gt IE 9]><!--><html><!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="viewport" content="width=device-width">
  <title>7th Moodstock electronic music festival</title>
  <meta name="description" content="7th Moodstock electronic music festival. Zaterdag 9 augustus. Wijchmaal - Peer.">
  <link rel="stylesheet" href="css/general.css">
  <link rel="stylesheet" href="css/intro.css">
  <script src="js/modernizr.js"></script>
  <!--[if lte IE 8]>
    <script src="js/oldie.js"></script>
  <![endif]-->
</head>
<body id="home">
  <main role="main">
    <article id="intro">
      <h1 class="msLogo hasBg msLogoAnimIntro">
        <span class="msLogoDate">Zaterdag<br> 9 augustus <br> <span>2014</span></span><br>
        <span class="msLogoNr"><span>7</span>th</span><br>
        <strong class="msLogoName">Moodstock</strong><br>
        <span class="msLogoDesc">electronic <strong>music festival</strong></span><br>
        <span class="msLogoPlace">Wijchmaal - Peer</span>
      </h1>
      <nav id="introNav">
        <ul class="hexSimpleGrid small">
          <li>
            <a href="line-up.html" class="hexSimple hexTxt small">
              <span class="hexTxtContent">Line up</span>
              <div class="hexSimple hexSimpleInner"></div>
            </a>
          </li>
         <li>
            <a href="info.html" class="hexSimple hexTxt small">
              <span class="hexTxtContent">Info</span>
              <div class="hexSimple hexSimpleInner"></div>
            </a>
          </li>
          <li>
            <a href="tickets.html" class="hexSimple hexTxt small">
              <span class="hexTxtContent">Tickets</span>
              <div class="hexSimple hexSimpleInner"></div>
            </a>
          </li>
          <li>
            <a href="partners.html" class="hexSimple hexTxt small">
              <span class="hexTxtContent">Partners</span>
              <div class="hexSimple hexSimpleInner"></div>
            </a>
          </li>
        </ul>
      </nav>
    </article>
  </main>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script>if (typeof jQuery == 'undefined') {document.write(unescape("%3Cscript src='js/jquery-1.11.0.min.js' type='text/javascript'%3E%3C/script%3E")); }</script>
  <script src="js/plugins.js"></script>
  <script src="js/general.js"></script>
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
    ga('create', 'UA-52719414-1', 'auto');
    ga('send', 'pageview');
  </script>
</body>
</html>