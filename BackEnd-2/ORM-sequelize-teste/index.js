// index.js
const sequelize = require('./config/database')
const Usuario = require('./models/User')

try {
    await sequelize.authenticate(); // Verifica a conexão com o BD 
    console.log('Conexão com o banco de dados estabelecida com sucesso')

    await Usuario.sync(); // crie a tabela de user caso nao exista 

    } catch (error) {
        console.log('Erro ao conectar/inserir no banco de dados', error)

    } finally {
        sequelize.close(); //Fecha a conexão com o banco de dados 
    }


try {
    await sequelize.authenticate(); // Verifica a conexão com o BD 
    console.log('Conexão com o banco de dados estabelecida com sucesso')

    await Usuario.sync(); // crie a tabela de user caso nao exista 

    const NovoUsuario = await Usuario.create({
        nome: 'Vinicius', 
        email: 'vinicius@email.com',
        senha: 'admin',
      });
      console.log('Usuário inserido com sucesso: ', NovoUsuario.toJSON());

    const usuarios = await Usuario.findAll();
    console.log('Lista de Usuários: ', usuarios.map((u) => u.toJSON()))

    const usuario = await Usuario.findByPk(id);
    await usuario.update({ senha: 'senha-forte'});
    console.log('Usuario atualizado com sucesso', usuario.toJSON())

    const deletarUsuario = await Usuario.findByP(id);
    await usuario.destroy()
    console.log('Usuario excluido com sucesso')



  } catch (error) {
    console.log('Erro ao se conectar/inserir no banco de dados: ', error);
    
  } finally {
    sequelize.close(); //feche a conexão com BD 
  }


