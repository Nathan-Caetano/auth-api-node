const Usuario = require('../models/Usuario')

const logar = async (req, res) => {
    const { email, senha } = req.body;
    console.log("Recebido:", { email, senha });

    try {
        const usuario = await Usuario.findOne({ where: { email } });

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado!" });
        }

        console.log("Senha salva no banco:", usuario.senha);

        if (usuario.senha.trim() !== senha.trim()) {
            return res.status(401).json({ erro: "Senha incorreta!" });
        }

        res.status(200).json({ mensagem: "Login realizado com sucesso!", usuario });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: "Erro ao realizar login" });
    }
}

module.exports = {
    logar,
}