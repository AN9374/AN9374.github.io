<html>
<body>
    Session ID <?php echo $_POST["sessionid"]; ?>

    <?php $file = "sessions.txt";
        $test = $_POST["sessionid"];
        file_put_contents($file, $text . "\n"); ?>

</body>

</html>