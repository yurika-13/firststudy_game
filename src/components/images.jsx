//imagesを配列に変更するコンポーネント
function importAll(i){
    const images = [];
    i.keys().forEach( item => {
        images.push(r(item));
    });
    //i.keys() = require.contextと使うメソッド。引数で指定されたディレクトリ内のファイルの相対パスを含む配列を返す
    //forEach()メソッド = 配列内の各ファイルに対して、require()で読み込んだファイルを、images配列に追加
    return (
        console.log(images),
        images
    );
}

const sushiImages = importAll(require.context('./images', false, /\.png/));
// '\' は option + ¥ で表示できる
// require.context = 指定されたモジュール "./images" の中身 "\.png" を動的に読み取るオブジェクト　

export { sushiImages }; 
