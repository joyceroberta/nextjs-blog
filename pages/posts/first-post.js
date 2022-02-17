import Link from 'next/link'

export default function FirstPost() {
    return (
        <div className="container">

            <div className="positions">
                <h2>
                    Primeira Posição
                </h2>

                <img className="images" src="https://i.pinimg.com/564x/dd/7e/a8/dd7ea8bec42290406365c63716f2b529.jpg" />
            </div>

            <div className="positions">
                <h2>
                    Segunda Posição
                </h2>

                <img className="images" src="https://i.pinimg.com/564x/4e/d3/a2/4ed3a25370f131c286c16b4f21d924a4.jpg" />
            </div>

            <div className="positions">
                <h2>
                    Terceira Posição
                </h2>

                <img className="images" src="https://i.pinimg.com/564x/7a/6f/c3/7a6fc35ad5c6acd5e19c07a9a114fddd.jpg" />
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