import styles from "./Home.module.css"
import savings from "../../img/pig.png"
import LinkButton from "../../components/layout/LinkButton"

function Home() {
    return(
    <section className={styles.home_container}>
        <h1>Bem-vindo ao <span>Costs</span></h1>
        <p>Comece a gerenciar os seus projetos agora  mesmo!</p>
        <LinkButton to="/newproject"/>
        <img src={savings} alt="costs" />
    </section>
    );
}
export default Home