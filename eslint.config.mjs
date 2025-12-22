import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    {
        settings: {
            'import/resolver': {
                typescript: {},
                node: {
                    extensions: ['.js', '.ts'],
                },
            },
        },
        plugins: {
            import: importPlugin,
            prettier: prettier,
        },
        rules: {
            'prettier/prettier': ['error', { endOfLine: 'auto' }],
            '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '_' }],
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-console': 'off',
            'import/order': [
                'warn',
                {
                    groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                    'newlines-between': 'always',
                },
            ],
        },
    },
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);

export default eslintConfig;
