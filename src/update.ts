import * as cheerio from 'cheerio';

// NEED TO IMPLEMENT 
function readMatchHistory(file: void): void {
    // read match history as dataframe

    // return dataframe
};

function writeUpdatedMH(file: void): void {
    // write or update base file
}

function compareAndUpdate(dataframe: void): void {
    // COMPARE older with new data 
    // if DIFFERENCE --> merge only new rows & old data else NOTHING
    // write out data if news
};




function getMatchHistoryData(pageHtml: string): void {
    const keys: string[] = [`Date`, `League`, `Team_X`, `Score`, `Team_Y`]
    const $ = cheerio.load(pageHtml)
    const $table = $("table.matches > tbody > tr")
    $table.each((rowIndex, row) => {
      let rowData: any = {}
      $(row).find("td").slice(0, 5).each((colIndex, cell) => {
        if (colIndex == 2 || colIndex == 4){
          rowData[`${keys[colIndex]}`] = $(cell).text().trim(); 
          return;
        }
        if (colIndex == 3){rowData[`${keys[colIndex]}`] = $(cell).text().replace(/\n/g, '').replace(/\s+/g, '').trim(); return;}
        rowData[`${keys[colIndex]}`] = $(cell).text().trim();
      });

      // convert data to dataframe
      // matchHistoryTableData.push(rowData)
      rowData = null
    })
    // TODO: write to json 
    //console.log(matchHistoryTableData)
  }