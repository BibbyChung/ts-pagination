@ygtN
Feature: test the simple pagination.
	Scenario: set up data and test it #1.
		Given ygtN ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 9                  | 64           | 5           |
		When ygtN ==> prepare the normal pagination.
			| First  | PreGroup | Previous |
			| 第一筆 | 前一組   | 上一頁   |
		Then ygtN ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text   | type      |
			| false             | true              | 0            | 第一筆 | First     |
			| false             | true              | 6            | 前一組 | PreGroup  |
			| false             | true              | 8            | 上一頁 | Previous  |
			| true              | true              | 9            | 10     | Number    |
			| false             | true              | 10           | 11     | Number    |
			| false             | true              | 11           | 12     | Number    |
			| false             | true              | 10           | >      | Next      |
			| false             | true              | 12           | >>     | NextGroup |
			| false             | true              | 12           | last   | Last      |
		And ygtN ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 9                  |

