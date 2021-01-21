const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passws]',
        BTN_LOGIN: ';btn'
    },
    MENU: {
       HOME: '[data-test=menu-home]',
       SETTINGS: '[data-test=menu-settings]',
       CONTAS: '[href="/contas"]',     
       RESET: '[href="/reset"]',
       MOVIMENTACAO: '[data-test=menu-movimentação]',
       EXTRATO: '[data-test=menu-extrato]'
    },
    CONTAS: {
        NOME: '[data-test=nome]',
        BTN_SAVE: '.btn',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(.,'${nome}')]/..//i[@class='far fa edit']`
    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-teste=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(.,'${desc}')]/following-sibling::small[contains(.,'${value}')]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(.,'${conta}')]/../..//i[@class='far-fa-trash-alt']`
    },
    SALDO: {
        FN_XP_SALDO_CONTA: nome => `//td[contains(.,'${nome}')]/../td[2]`,
    },
    MASSAGE: '.toast-message'

}

export default locators;


