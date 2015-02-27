<h1> Minesweeper angularized! </h1>
<h4>Authors:</h4>
<p>
  Luke Chinworth <br/>
  Jake Kaad
</p>

<h4>Setup</h4>

<p>
Clone directory to desktop.  </br>
</br>
Open directory in your command line.  Start a HTTP server using:
<code>
  $ python -m SimpleHTTPServer
</code>
Open your browser and go to <a href="http://localhost:800">localhost:800</a>
Select a 12x12 grid and hit new game.</br>
We recommend resizing browser until you can seel all cells.
</p>

<h4>GamePlay</h4>
<p>
  Single Click a cell to plant a flag on a suspected mine. <br/>
  Double Click a cell to reveal it.  Cells with no mines as neighbors will automatically reveal all of their neighbors.
  Cells with bombs nearby will have a number signifying how many bombs are nearby.
</p>

<h4>Licensing</h4>
MIT open source license
