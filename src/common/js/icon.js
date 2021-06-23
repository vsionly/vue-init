/**
 * 使用格式 <svg-icon name="xxx"></svg-icon>
 */

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)
