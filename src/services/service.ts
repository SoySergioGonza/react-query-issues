import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});