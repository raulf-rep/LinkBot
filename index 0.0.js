const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')

  command(client, 'crch', (message) => {
    const name = message.content.replace('','')

    message.guild.channels
      .create(name, {
        type: 'voice',
      })
      .then((channel) => {
        const categoryId = '784102108374368327'
        channel.setParent(categoryId)
        channel.setUserLimit(10)
      })
  })
  const channel = getVoiceChannels(guild)
  let isEmpty = false

  channels.foreach((channel)=>{
    if(!isEmpty && channel.members.size === 0){
      setTimeout(function(){})
    }
    //sin acabar
  })
  
  
})

client.login(config.token)