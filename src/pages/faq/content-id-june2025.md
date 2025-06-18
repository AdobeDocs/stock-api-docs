# Adobe Stock Content ID changes ⚠️

<InlineAlert variant="warning" />

**Are you affected by this change?**

Because of the growth of uploaded content, Adobe Stock will run out of content IDs by the end of the year. The current limit for Stock IDs is 2,147,483,647 ([32-bit signed integer](https://en.wikipedia.org/wiki/2,147,483,647)), and the new limit will be 9,007,199,254,740,991 ([2<sup>53</sup> - 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)). Adobe is changing the Stock infrastructure and databases to accept these larger numbers, so this may have an impact on your Stock application.

What does this mean to you? Some programming languages and databases will require changes to your integration because the default number type might not be large enough to handle the new limit. If you store these high values in your database, you may run into limitations there as well, requiring updates to the data type used to store Stock integers.

Here are some steps to help you prepare for this change:

- Ask your engineering team to review the current system architecture. You can refer to the short list of programming languages and databases below.
- Update the usage of your programming language and database primitive types to support the new limit. There should be no harm in changing this value right away.
- Test your current integration by using a mocked response with dummy data. For example, you can save a response from the Stock API and replace the content `id` value with the new limit and see whether your system can recognize and store this value without errors.

This is a short list of programming languages (not a comprehensive list, and if your application type is not listed in the table below, you may need to do your own research) and whether changes would be required. Please review with your engineering team whether changes must be made:

| Name | Migration summary | Limit |
| --- | --- | --- |
| JavaScript and TypeScript | [No work needed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) | 9,007,199,254,740,991 (2<sup>53</sup> - 1) |
| PostgreSQL | [Migrate to bigint](https://www.postgresql.org/docs/current/datatype-numeric.html) | INT limit: 2,147,483,647<br/>BIGINT limit: 2<sup>63</sup> - 1 |
| MySQL | [Migrate to BIGINT](https://dev.mysql.com/doc/refman/8.4/en/integer-types.html) | INT limit: 2,147,483,647<br/>BIGINT limit: 2<sup>63</sup> - 1 |
| Python | [No work if using Python 3 or 64-bit version of Python 2](https://docs.python.org/3/library/functions.html#int) | No limit in Python 3: based on available memory<br/>Limit for Python 2: 2<sup>63</sup> - 1 for 64 bit systems |
| PHP | [If using 64-bit version, no work needed](https://www.php.net/manual/en/reserved.constants.php#constant.php-int-max) |  2,147,483,647 in 32-bit systems<br/>2<sup>63</sup> - 1 for 64-bit  |
| Java | [Migrate from Integer to Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html) | int limit: 2,147,483,647<br/>long limit: 2<sup>63</sup> - 1 |
| .NET | [Migrate to System.Int64](https://learn.microsoft.com/en-us/dotnet/standard/numerics) | System.Int32:  2,147,483,647<br/>System.Int64: 2<sup>63</sup> - 1 |
| Swift | [No work if using 64-bit system](https://developer.apple.com/documentation/swift/int) | On 32-bit platforms, Int is the same size as Int32, and on 64-bit platforms, Int is the same size as Int64. |

Please understand that we must make these changes to our system to continue accepting content and running the Stock business. If you need more information or help related to the issue, please contact stockapis@adobe.com. 
