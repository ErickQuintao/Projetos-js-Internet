import styles from"./LinkButton.module.css"


function LinkButton(to, text){
return(
 <link className={styles.btn}to={to}>
    Criar Projeto
 </link>
)
}
export default LinkButton