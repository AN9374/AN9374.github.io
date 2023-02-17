<html>
<body>
    Session ID <?php echo $_POST["sessionid"]; ?>

    <?php 
    $file = fopen("sessions.txt", "a") or die();
    fwrite($file, $_POST["sessionid"]);
    fclose($file)
    ?>

</body>

</html>