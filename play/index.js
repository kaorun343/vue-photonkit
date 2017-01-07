import { configure } from 'vue-play'

const load = requireContext => requireContext.keys().map(requireContext)

const scenarios = load(require.context('.', true, /.play.js$/))

configure(scenarios, module)
