import React from "react";

import Box from "@material-ui/core/ListItemText";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from "@material-ui/core/Container";
import CardMedia from '@material-ui/core/CardMedia';



class Details extends React.Component{


  render(){
    return (
        <main className="aa">
          <Container>
            <Box>
              {/*投稿の表示 */}         
              <Card>
                <image src={} style={}/>
                {/*ユーザー名 */}
                <CardContent>{}</CardContent>
                {/*ユーザーID */}
                <CardContent>{}</CardContent>
                {/*投稿テキスト */}
                <CardContent>{}</CardContent>
                {/*投稿画像・動画 */}
                { <getMedia /> }
                <CardContent>{}のリツイート</CardContent>
                <CardContent>{}のいいね</CardContent>   
              </Card>
              {/*レスポンスの表示 */}
              { response.map(([]) => {return(<getResponse />)})}
            </Box>
            <Box>
　　　　　　 　{/*広告の表示 */}
            </Box>
          </Container>
        </main>
    )
  }
}
