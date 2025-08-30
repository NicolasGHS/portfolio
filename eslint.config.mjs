
import { defineConfig, globalIgnores } from "eslint/config"
import unusedImports from "eslint-plugin-unused-imports"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default defineConfig([
	globalIgnores([
		"**/node_modules/*",
		"**/node_modules/",
		"graphql/generated/*",
		".next",
	]),
	{
		extends: compat.extends(
			"next",
			"next/core-web-vitals",
			"plugin:prettier/recommended"
		),

		plugins: {
		},

		rules: {
			"prettier/prettier": [
				"error",
				{
					singleQuote: false,
				},
			],

			"react-hooks/exhaustive-deps": "warn",
			"no-console": "error",
			"unused-imports/no-unused-imports-ts": "error",
		},
	},
])

