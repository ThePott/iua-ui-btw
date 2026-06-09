import js from "@eslint/js"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import { defineConfig, globalIgnores } from "eslint/config"
import globals from "globals"
import tseslint from "typescript-eslint"

export default defineConfig([
    globalIgnores(["dist", "node_modules", ".husky"]),
    {
        files: ["**/*.{ts,tsx}"],
        extends: [
            js.configs.recommended,
            tseslint.configs.recommended,
            reactHooks.configs.flat.recommended,
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            globals: globals.browser,
        },
        rules: {
            "prefer-const": "error", // 재할당하지 않는 변수는 const 사용 권장 (경고만)
            "@typescript-eslint/no-unused-vars": [
                "error", // 에러 대신 경고로 설정
                {
                    argsIgnorePattern: "^_", // _로 시작하는 매개변수는 미사용 허용
                    varsIgnorePattern: "^_", // _로 시작하는 변수는 미사용 허용
                },
            ],

            // ===== 기본적인 코드 품질 =====
            "no-console": "error", // console.log 사용시 경고 (개발 중에는 필요할 수 있음)
            "no-debugger": "error", // debugger 문 사용시 경고 (에러 아님)
            "no-duplicate-imports": "error", // 중복 import 경고

            "react-hooks/exhaustive-deps": "off",
        },
    },
])
