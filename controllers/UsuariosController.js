const Usuario = require('../models/Usuario');

const listarUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();

        if (usuarios.length === 0) {
            return res.status(404).json({ message: "Não há registros cadastrados." });
        }

        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao buscar usuários.", detalhes: error.message });
    }
};

const selecUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado." });
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao buscar usuário.", detalhes: error.message });
    }
};

const criarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({ erro: "Nome, email e senha são obrigatórios." });
    }

    try {
        const usuario = await Usuario.create({ nome, email, senha });
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao cadastrar o usuário.", detalhes: error.message });
    }
};

const deletarUsuario = async (req, res) => {
    try {
        const usuario = await Usuario.findByPk(req.params.id);

        if (!usuario) {
            return res.status(404).json({ erro: "Usuário não encontrado." });
        }

        await usuario.destroy();

        return res.status(200).json({ mensagem: `Usuário ID:${usuario.id}, Nome:${usuario.nome} deletado com sucesso.` });
    } catch (error) {
        return res.status(500).json({ erro: "Erro ao deletar usuário.", detalhes: error.message });
    }
};

module.exports = {
    listarUsuarios,
    selecUsuario,
    criarUsuario,
    deletarUsuario
};