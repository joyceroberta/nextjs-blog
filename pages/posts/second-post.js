import Link from 'next/link'

export default function SecondPost() {
    return (
        <div className="container">

            <div className="positions">
                <h2>
                    Primeira Posição
                </h2>

                <img className="images" src="" />
            </div>

            <div className="positions">
                <h2>
                    Segunda Posição
                </h2>

                <img className="images" src="" />
            </div>

            <div className="positions">
                <h2>
                    Terceira Posição
                </h2>

                <img className="images" src="" />
            </div>

            <footer>
                <Link href="/">
                    Home
                </Link>
            </footer>

            <style jsx>{`
.container {
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  background-color: pink;
}

.positions{
    display: flex;
    flex-direction: column;
    margin: 0 15px;
    align-items: center;


}
.images{
    width: 150px;
    heigth: 150px;
    
}
footer {
    width: 100%;
    height: 100px;
    border-top: 1px solid #eaeaea;
    display: flex;
    justify-content: center;
    align-items: center;
  }

`}</style>

            <style jsx global>{`
html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Redressed', cursive;
  
}

    

* {
  box-sizing: border-box;
}
`}</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');
</style>
        </div>
    )



}