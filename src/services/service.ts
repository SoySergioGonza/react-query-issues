import axios from 'axios';

export const githubApi = axios.create({
	baseURL: 'https://api.github.com/repos/facebook/react',
	headers: {
		Authorization: 'Bearer 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'
	}
});