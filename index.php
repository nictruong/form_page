<html>
<head>
	<link rel="stylesheet" href="libraries/bootstrap-datepicker-1.4.0-dist/css/bootstrap-datepicker.css"/>
	<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/myStyle.css">
</head>
<body>

	<form action="" method="post">
		<input type="text" name="inputText" placeholder="Client"/>
		<input type="submit" name="SubmitButton"/>
	</form>  

	<div class="container-fluid">
		<div id="search"></div>
		<div id="searchList"></div>
		<div id="form"></div>
	</div>


	<form action="../public_page/hello.php" method="post">
		
			<?php    
			if(isset($_POST['SubmitButton'])) {

				$input = $_POST['inputText'];

				echo "<input type='text' name='name' value='{$input}''>";
				echo '<select id="boxA" multiple="multiple" size="10"></select>';
				echo '<select id="boxB" name="ids[]" multiple="multiple" size="10">';
				

				$string = file_get_contents("../public_page/test.json");
				$json = json_decode($string, true);

				for ($i = 0; $i < count($json); $i++) {
					if ($json[$i]['name'] == $input) {
						for ($j = 0; $j < count($json[$i]['counting_site']); $j++) {
							echo "<option value='{$json[$i]['counting_site'][$j]['id']}' selected>{$json[$i]['counting_site'][$j]['id']}</option>";
						}
						break;
					}
				}
				echo '</select>';



				for ($i=0; $i < count($json); $i++) {
					if ($json[$i]['name'] == $input) {
						echo "<div>Change title to</div><input type='text' name='displayedName' value='{$json[$i]['displayedName']}'/>";
						for ($j=0; $j < count($json[$i]['counting_site']); $j++) {
							echo "<div id='id_{$json[$i]['counting_site'][$j]['id']}'>{$json[$i]['counting_site'][$j]['id']}</div><input type='text' name='{$json[$i]['counting_site'][$j]['id']}' value='{$json[$i]['counting_site'][$j]['name']}'/>";
						}
					}
				}
			}
			?>
		
		<input type="submit" name="SubmitButton2"/>
	</form>

	<input id="button1" type="button" value="Move to List B" />
	<input id="button2" type="button" value="Move to List A" />

	<script type="text/template" id="search_template">
        <div class="search_area">
            <form class="form-horizontal" role="form">
    		      <input class="form-control" type="text" id="search_input" placeholder="Domain" />
    		    <button type="button" class="btn btn-primary btn-sm" id="search_button">Search</button>
            </form>
        </div>
	</script>

    <script type="text/template" id="searchList_template">
        <button type="button" class="domain_link btn btn-link btn-sm" data-id="<%- id %>"><%- name %></button>
    </script>

	<!-- Libraries -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="libraries/lodash.min.js"></script>
    <script src="libraries/backbone-min.js"></script>
    <script src="libraries/backbone.marionette.min.js"></script>
    <script src="libraries/jquery-ui.js"></script>
	<script src="http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.3/moment.min.js"></script>
	<script src="libraries/Highstock-2.1.6/js/highstock.js"></script>
	<script src="libraries/jquery-ui-1.11.4.custom/jquery-ui.js"></script>
	<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js"></script>
	<script src="http://matchingnotes.com/javascripts/leaflet-google.js"></script>
	<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>

	<!-- App -->
	<script src="js/app.js"></script>

	<!-- Controller -->
	<script src="js/controller.js"></script>

	<!-- Layout -->
	<script src="js/layout.js"></script>

	<!-- View -->
	<script src="js/view/form.js"></script>
	<script src="js/view/search.js"></script>
	<script src="js/view/searchList.js"></script>
	<script src="js/view/boxA.js"></script>

	<!-- Model -->
	<script src="js/model/domain.js"></script>
	<script src="js/model/counter.js"></script>

	<script type="text/javascript">
		$(function(){
		    $("#button1").click(function(){
		        $("#boxA > option:selected").each(function(){
		            $(this).remove().appendTo("#boxB");
		        });
		    });

		    $("#button2").click(function(){
		        $("#boxB > option:selected").each(function(){
		            $(this).remove();
		        });
		    });
		});
	</script>

</body>
</html>