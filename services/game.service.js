const CQRSMixin = require('../cqrs/cqrs.mixin')

module.exports = {
  name: 'GameDomain',
  mixins: [CQRSMixin],
  hooks: {
    before: {
      '*': ['ExtractActionMetadata', 'ValidateCQRSParams']
    },
    after: {
      '*': ['EmitEventSourcing', 'ResponseCQRS']
    },
    error: {
      '*': ['ErrorCQRS']
    }
  },
  actions: {
    // Commands
    GenerateRandomHeroCommand: {
      cache: false,
      ...require('../cqrs/domains/game/commands/GenerateRandomHeroCommand').getAction()
    }
    // Queries
  },
  methods: {
  }
}
