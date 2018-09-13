<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Matching Game</title>
    <meta name="description" content="">
    <link rel="stylesheet prefetch" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <link rel="stylesheet prefetch" href="https://fonts.googleapis.com/css?family=Coda">
    <link rel="stylesheet" href="css/app.css">
</head>
<body>

    <div class="container">
        <header>
            <h1>Matching Game</h1>
        </header>

        <section class="score-panel">
        	<ul class="stars">
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        		<li><i class="fa fa-star"></i></li>
        	</ul>

        	<span id ="moves" class="moves">0</span>
          <span id = "time" class="time"> </span>

            <div id ="restart" class="restart">
        		<i class="fa fa-repeat"></i>
        	</div>
        </section>

        <ul id ="deck" class="deck">
            <li class="card">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card">
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card">
                <i class="fa fa-cube"></i>
            </li>
            <li class="card">
                <i class="fa fa-anchor"></i>
            </li>
            <li class="card">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card">
                <i class="fa fa-diamond"></i>
            </li>
            <li class="card">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card">
                <i class="fa fa-leaf"></i>
            </li>
            <li class="card">
                <i class="fa fa-bomb"></i>
            </li>
            <li class="card">
                <i class="fa fa-bolt"></i>
            </li>
            <li class="card">
                <i class="fa fa-bicycle"></i>
            </li>
            <li class="card">
                <i class="fa fa-paper-plane-o"></i>
            </li>
            <li class="card">
                <i class="fa fa-cube"></i>
            </li>
        </ul>
    </div>

    <!-- The Modal -->
    <!-- https://www.w3schools.com/howto/howto_css_modals.asp -->
    <div id="myModal" class="modal">

    <!-- Modal content -->
        <div class="modal-content">
    <!-- span to close the modal &times = will display × -->
    <!-- https://www.w3schools.com/charsets/ref_html_entities_4.asp -->
          <span class="close">&times;</span>
          <p>Congratulations!</p>
          <p>You&acute;ve won this game!</p>
          <p class='resultTime'></p>
          <ul class = 'resultStars'></ul>
        </div>
    </div>

    <script src="js/app.js"></script>
</body>
</html>
